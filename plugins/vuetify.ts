// import this after install `@mdi/font` package

import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: false
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
