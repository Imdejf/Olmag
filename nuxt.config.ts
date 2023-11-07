import { GlobalSettings } from "./environmentsettings"
import { fetchCategories, fetchBlogs, fetchProducts } from "./static/api/getData"
import { fetchSitemapProducts, fetchSitemapCategories, fetchSitemapBlogs, fetchSitemapPost } from "./static/api/getSitemap";
import axios from "axios";

const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  site: {
    url: GlobalSettings[appEnv].hostURL
  },
  nitro: {
    routeRules: {
      "/public/assets/**": { headers: { 'cache-control': `public,max-age=${31536000},s-maxage=${31536000}` } },
      '/': { ssr: true },
      '/post/**' : { ssr: true },
      '/products/**': { ssr: true },
    },
},
hooks: {
  async 'nitro:config'(nitroConfig) {
      // if (nitroConfig.dev) {
      //     return
      // }
      await siteMapGeneration();
      await saveDataToFile();
      const blogSlugs = await getBlogRoutes();
      const categorySlugs = await getCategory();
      nitroConfig.prerender.routes.push(...blogSlugs, ...categorySlugs)
      return
  }
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

gtm: {
  id: 'GTM-NXFTLZGJ', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  queryParams: {
    // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
    gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
    gtm_preview: 'env-4',
    gtm_cookies_win: 'x',
  },
  defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
  nonce: '2726c7f26c', // Will add `nonce` to the script tag
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  devtools: true, // (optional)
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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-jsonld',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    ['nuxt-gtag', {
      id: GlobalSettings[appEnv].google_analytics_id,
      initialConsent: true,
    }],  
  ],

  swiper: {
    modules: ['navigation', 'pagination', 'thumbs', 'free-mode'],
  },
  
  robots: {
    sitemap: '/sitemap.xml'
  },  
  
  sitemap: {
    xsl: false,
    cacheTtl: 1000 * 60 * 60 * 24, // 1 day
    inferStaticPagesAsRoutes: false,
  },

  routeRules: {
    '/': { sitemap: { 
      changefreq: 'daily', 
      priority: 1.0.toFixed(1)
    },
  },
  '/checkout/**': { index: false },
  '/search/**': { index: false },
  '/account/**': { index: false },
  '/about-us': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/About-Cookies' : { index: false },
  '/about-cookies': { sitemap: {
    changefreq: 'daily',
    priority: 0.9
    }     
  },
  '/blog': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/contact': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/login': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/payment': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/category': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/privacy-policy': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/delivery': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/register': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  '/terms-of-use': { sitemap: {
    changefreq: 'daily', 
    priority: 0.9
    }     
  },
  }
})

const getBlogRoutes = async () => {
  const blogsList = await axios.get(GlobalSettings[appEnv].apiBaseURL + 'product/blogCategory/slugs', {
    params: {
      storeId: GlobalSettings[appEnv].storeId,
      build: true
    }
  })

  return blogsList.data.map((category) => `/blog/${category}`);
};

const getCategory = async () => {
  const categoryList = await axios.get(GlobalSettings[appEnv].apiBaseURL + 'product/category/slugs', {
    params: {
      storeId: GlobalSettings[appEnv].storeId,
      build: true
    }
  })
  return categoryList.data.map((category) => `/category/${category}`);
};

const saveDataToFile = async () => {
  await fetchCategories(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].languageId, GlobalSettings[appEnv].apiBaseURL);
  await fetchBlogs(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].languageId, GlobalSettings[appEnv].apiBaseURL);
  await fetchProducts(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].languageId, GlobalSettings[appEnv].baseURL);
}

const siteMapGeneration = async () => {
  await fetchSitemapProducts(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].apiBaseURL)
  await fetchSitemapCategories(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].apiBaseURL)
  await fetchSitemapBlogs(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].apiBaseURL)
  await fetchSitemapPost(GlobalSettings[appEnv].storeId, GlobalSettings[appEnv].apiBaseURL)
}

