// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/main.css"],

  app: {
    head: {
      script: [{ src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://mw2.breezyx.space/static/index.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
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

  modules: ["@nuxt/ui"],

  sourcemap: true,
});

// media: "print",
// onload: "this.media='all'",
