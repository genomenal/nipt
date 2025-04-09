const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'NIPT helicon',
    tagline: 'Dinosaurs are cool',
    url: process.env.SITE_URL || 'https://genomenal.ru',
    baseUrl: process.env.BASE_URL || '/nipt/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'Helicon',
    projectName: 'nipt',
    trailingSlash: true,
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'Genomenal Logo',
                src: 'img/NIPT-Helicon-Logo.svg',
                srcDark: 'img/NIPT-Helicon-Logo.svg',
            },
            items: [],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    homePageId: 'intro',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'eu'],
        localeConfigs: {
            ru: {
                label: 'Русский',
                direction: 'ltr',
            },
            eu: {
                label: 'English',
                direction: 'ltr',
            },
        },
    },
    customFields: {
        docker: {
            port: process.env.PORT || 8099,
            host: process.env.HOST || '0.0.0.0',
        },
        staticDirectories: ['static', 'public'],
    },
};
