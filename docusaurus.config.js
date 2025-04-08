const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'NIPT helicon',
    tagline: 'Dinosaurs are cool',
    url: 'http://localhost:8099',
    baseUrl: '/docs',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'Helicon', // Usually your GitHub org/user name.
    projectName: 'nipt', // Usually your repo name.
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
        localeConfigs: {},
    },
};
