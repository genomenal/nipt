const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'NIPT helicon',
    tagline: 'Dinosaurs are cool',
    url: 'https://genomenal.ru',
    baseUrl: '/nipt/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'genomenal', // Usually your GitHub org/user name.
    projectName: 'nipt', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: '',
            logo: {
                alt: 'Genomenal Logo',
                src: 'img/NIPT-Helicon-Logo.svg',
                srcDark: 'img/NIPT-Helicon-Logo.svg',
                href: 'https://genomenal.ru',
            },
            items: [],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `© 2019-2024 Novel Software Systems. Все права защищены.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        algolia: {
            apiKey: 'dbf798e1335cbc57fae603c4eb582fe4',
            indexName: 'nipt',
            appId: 'DZAOFCP7KJ',
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
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/RoadRoller/ngsw-docs-ru/edit/master/website/',
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
        localeConfigs: { },
            },
};