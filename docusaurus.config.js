// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oficina de Educación Online',
  tagline: 'Plataforma de documentación EOL',
  url: 'https://docs.oficinaeol.uchile.cl',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'eol-uchile', // Usually your GitHub org/user name.
  projectName: 'docs-eol', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          // id: 'default',
          sidebarPath: require.resolve('./sidebars.js'),
          // include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          // exclude: [
          //   // '**/_*.{js,jsx,ts,tsx,md,mdx}',
          //   '**/_*/**',
          //   '**/*.test.{js,jsx,ts,tsx}',
          //   '**/__tests__/**',
          // ],
          // sidebarCollapsible: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/eol-uchile/docs-eol/tree/main',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/eol-uchile/docs-eol/tree/main',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Logo EOL',
          src: 'img/logo-eol-black.png',
          srcDark: 'img/logo-eol-white.png',
        },
        items: [
          // {
          //   to:'docs/intro',
          //   position: 'left',
          //   label: 'Introducción',
          // },
          {
            to: 'eol/intro',
            label: 'EOL',
            position: 'left',
          },
          {
            to: 'norteamericano/intro',
            label: 'Norteamericano',
            position: 'left',
          },
          {
            to: 'uabierta/intro',
            label: 'UAbierta',
            position: 'left',
          },
          {
            to: 'VirtualLabX/intro',
            label: 'VirtualLabX',
            position: 'left',
          },
          {
            to: 'cmm/intro',
            label: 'CMM EduFormación',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://oficinaeol.uchile.cl/home',
            label: 'Oficina EOL',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Logo VTI-EOL',
          src: 'img/logo-eol-white.png',
          // width: 160,
          // height: 80,
        },
        links: [
          // {
          //   title: 'DOCUMENTACIÓN',
          //   items: [
          //     {
          //       label: 'Introducción',
          //       to: 'docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'PLATAFORMAS',
            items: [
              {
                label: 'Educación Online (EOL)',
                href: 'https://eol.uchile.cl/',
              },
              {
                label: 'Norteamericano',
                href: 'https://norteamericano.virtual-labx.cl/'
              },
              {
                label: 'CMM Edu Formación',
                href: 'https://cmmeduformacion.uchile.cl/',
              },
              {
                label: 'UAbierta',
                href: 'https://uabierta.uchile.cl/',
              },
              {
                label: 'Eduonline',
                href: 'https://eduonline.ing.uchile.cl/',
              },
              {
                label: 'Virtual LabX',
                href: 'https://virtual-labx.cl/',
              },
            ],
          },
          {
            title: 'CONTACTO',
            items: [
              {
                href: 'https://goo.gl/maps/dBy3bJxzYLDiHgqf7',
                label: 'Diagonal Paraguay 265, Torre 15, Oficina 1004, Santiago, Chile.',
                position: 'right',
              },
              {
                href: 'mailto:eol-ayuda@uchile.cl',
                label: 'eol-ayuda@uchile.cl',
                position: 'right',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              // {
              //   html: `
              //   <a href="https://goo.gl/maps/dBy3bJxzYLDiHgqf7" target="_blank" rel="noreferrer noopener">
              //     <img src="/static/img/map.png" alt="Maps" width="25" height="25" />  Diagonal Paraguay 265, Torre 15, Oficina 1004, Santiago, Chile.
              //   </a>
              // `,
              // },
              // {
              //   // label: 'eol-ayuda@uchile.cl',
              //   html: `
              //   <a href="mailto:eol-ayuda@uchile.cl" target="_blank" rel="noreferrer noopener">
              //     <img src="/static/img/correo-electronico.png" alt="Correo Electronico" width="25" height="25" />  eol-ayuda@uchile.cl
              //   </a>
              //   `,
              // },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Oficina de Educación Online, Vicerrectoría de Tecnologías de la Información, Universidad de Chile. Todos los derechos reservados.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
