// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome'
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  fontawesome: {
    icons: {
      solid: ['circle'],
      regular: ['circle']
    }
  },
  devtools: { enabled: true }
})