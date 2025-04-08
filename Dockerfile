# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8099
EXPOSE 8099

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 