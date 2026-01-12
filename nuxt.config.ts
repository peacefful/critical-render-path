// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/main.css"],

  app: {
    head: {
      script: [{ src: "https://player.twitch.tv/js/embed/v1.js" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://mw2.breezyx.space/static/index.css",
        },
      ],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  sourcemap: true,
});
