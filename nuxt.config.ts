// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/strapi",
    "@vesp/nuxt-fontawesome",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    admin: "/admin",
    version: "v5",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  fontawesome: {
    icons: {
      solid: [
        "circle",
        "building-columns",
        "calendar-days",
        "briefcase",
        "pencil",
        "book",
        "envelope",
      ],
      regular: ["circle"],
      brands: ["linkedin", "square-github"],
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [tailwindcss()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
