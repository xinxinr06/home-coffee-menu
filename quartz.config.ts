import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Home Coffee Menu",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "xinxinr06.github.io/home-coffee-menu",
    ignorePatterns: [".obsidian", "private", "templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffaf4",
          lightgray: "#eadfd2",
          gray: "#b8aa9b",
          darkgray: "#58483a",
          dark: "#2d241d",
          secondary: "#8f4f2f",
          tertiary: "#4f8a78",
          highlight: "rgba(143, 79, 47, 0.14)",
          textHighlight: "#ffe6a7aa",
        },
        darkMode: {
          light: "#171412",
          lightgray: "#342c27",
          gray: "#7f7166",
          darkgray: "#e8ded4",
          dark: "#fff8ef",
          secondary: "#e5a06f",
          tertiary: "#8fd0bd",
          highlight: "rgba(229, 160, 111, 0.18)",
          textHighlight: "#8a6a2f88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: false }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

