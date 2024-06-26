// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const date = () => {
  const year = new Date().getFullYear();
  if(year > 2023) {
    return `2023–${ year }`;
  }
  return `${ year }`;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "19460 Docs",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://robotics.xbhs.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "XaverianTeamRobotics", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // ooh spooky scary this is in the deep web ghost emoji
  // (communications would get mad at us if this site was indexable because it doesn't follow the branding guide)
  noIndex: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: [ "en" ],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        pages: {
          path: "pages",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "19460 Hawks Robotics",
        logo: {
          alt: "Hawkbot",
          src: "img/favicon.png",
        },
        items: [
          {
            type: "dropdown",
            label: "2.0.0",
            position: "right",
            items: [
              {
                type: "html",
                value: "<span class='dropdown-title dropdown-mb'>Active Versions</span>",
              },
              {
                href: "/",
                label: "2.0.0"
              },
              {
                type: "html",
                value: `${ "" }<span class="dropdown-title dropdown-mt dropdown-mb">Archived Versions</span>`
              },
              {
                type: "html",
                value: `${ "" } <a class="dropdown__link" href="./v1.1.0/">1.1.0</a>`,
              },
              {
                type: "html",
                value: `${ "" } <a class="dropdown__link" href="https://github.com/XaverianTeamRobotics/freight-frenzy-archive/blob/gh-pages/guides/index.md">1.0.0</a>`,
              }
            ]
          },
          {
            type: "dropdown",
            label: "Web Utilities",
            position: "right",
            items: [
              {
                href: "https://xaverianteamrobotics.github.io/webinstaller",
                label: "Flash Robot Controller APK",
                target: "_blank"
              },
              {
                href: "https://xaverianteamrobotics.github.io/imgutil",
                label: "Upload Images to robotics.xbhs.com",
                target: "_blank"
              },
            ]
          },
          {
            type: "dropdown",
            label: "Javadoc",
            position: "right",
            items: [
              {
                href: "https://xaverianteamrobotics.github.io/FtcRobotController",
                label: "Javadoc (all)",
                target: "_blank"
              },
              {
                href: "https://xaverianteamrobotics.github.io/FtcRobotController/-team-code/org.firstinspires.ftc.teamcode.features/index.html",
                label: "Javadoc (features)",
                target: "_blank"
              },
              {
                href: "https://xaverianteamrobotics.github.io/FtcRobotController/-team-code/org.firstinspires.ftc.teamcode.opmodes/index.html",
                label: "Javadoc (opmodes)",
                target: "_blank"
              },
            ]
          },
          {
            href: "https://github.com/XaverianTeamRobotics/",
            label: "GitHub",
            position: "right",
          },
          {
            position: "right",
            type: "html",
            value: `${ "" } <a class="navbar__link" href="/remote-debugger">Remote Debugger</a>`,
          },
          {
            position: "right",
            type: "html",
            value: `${ "" } <a class="navbar__link" href="/theBook.pdf">How to Robot: The Book</a>`,
          },
          {
            href: "https://xaverianteamrobotics.github.io/FtcRobotController/controls",
            label: "Controls",
            position: "right",
          }
        ]
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true
      },
      prism: {
        theme: require("prism-react-renderer").themes.dracula,
        darkTheme: require("prism-react-renderer").themes.dracula,
        additionalLanguages: [ "java" ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © <wbr/>${ date() } <wbr/>Xaverian Brothers High School. <wbr/>All rights reserved.`,
      }
    }),
};

module.exports = config;
