import { GlobalSettings } from "./environmentsettings"

const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: GlobalSettings[appEnv].hostURL
  },
  nitro: {
    routeRules: {
      "/public/assets/**": { headers: { 'cache-control': `public,max-age=${31536000},s-maxage=${31536000}` } },
      '/': { prerender: true },
    },
    prerender: {
        crawlLinks:true
    },
},

app: {
  head: {
    title: "Wyposażenie magazynów - Najlepsze rozwiązania, niske ceny | Olmag.pl",
    meta: [
      {
        name: "description",
        content: "Olmag.pl to sklep oferujący wyposażenie magazynowe od najlepszych producentów - 📦 pojemniki magazynowe, 📦 drabiny aluminiowe, 📦 regały magazynowe oraz inne."
      },
      {
        name: "format-detection",
        content: "telephone=no"
      }
    ],
    link: [
      {
        rel: "dns-prefetch",
        href: "https://www.googletagmanager.com",
        crossorigin: "anonymous"
      },
      {
        rel: "dns-prefetch",
        href: "https://www.czater.pl",
        crossorigin: "anonymous"
      }
    ],
  }
},

  runtimeConfig: {
    public: {
      siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
      baseURL: GlobalSettings[appEnv].baseURL,
      apiBaseURL: GlobalSettings[appEnv].apiBaseURL,
      hostURL: GlobalSettings[appEnv].hostURL,
      gtm_id: GlobalSettings[appEnv].googleTagManagerKey,
      gtm_enabled: GlobalSettings[appEnv].googleTagManagerEnabled,
      gtm_debug: GlobalSettings[appEnv].googleTagManagerDebug,
      storeId: GlobalSettings[appEnv].storeId,
      languageId: GlobalSettings[appEnv].languageId,
    }
  },

  css: [
    '@/assets/css/main.css',
  ],

  modules: [
    'nuxt-jsonld',
    '@pinia/nuxt',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    ['nuxt-gtag', {
      id: GlobalSettings[appEnv].google_analytics_id,
      initialConsent: true,
    }],  
  ]
})
