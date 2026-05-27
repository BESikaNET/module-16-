import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["@/styles/styles.less"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/variables.less";
            @import "@/styles/mixins.less";
          `,
        },
      },
    },
    plugins: [
      svgLoader(),
      {
        name: "encode-html-urls",
        transformIndexHtml: (html) =>
          html.replace(/(href|src)="([^"]+)"/g, (match, attribute, url) => {
            return `${attribute}="${encodeURI(url)}"`;
          }),
      },
    ],
  },
});