# syntax=docker/dockerfile:1

# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production
ENV CI=true

# Add build arguments with defaults
ARG SITE_URL=http://localhost:8099
ARG BASE_URL=/docs/

# Set build-time environment variables
ENV SITE_URL=${SITE_URL}
ENV BASE_URL=${BASE_URL}

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with frozen lockfile for reproducibility
RUN yarn install --frozen-lockfile --network-timeout 1000000

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM nginx:alpine

# Install envsubst for environment variable substitution
RUN apk add --no-cache gettext

# Set environment variables for nginx
ENV BASE_URL=/docs/

# Copy nginx configuration and entrypoint script
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf.template
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Create log directory
RUN mkdir -p /var/log/nginx

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 8099

ENTRYPOINT ["/docker-entrypoint.sh"]