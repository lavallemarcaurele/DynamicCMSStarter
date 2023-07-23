export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@nuxt/image', 'nuxt-swiper', 'nuxt-icon', '@nuxtjs/device', "@nuxtjs/strapi"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
