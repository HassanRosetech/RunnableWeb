// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css:[
    "~/assets/fonts/unicons/unicons.css",
    "~/assets/css/plugins.css",
    "~/assets/css/colors/sky.css",
    "~/assets/css/fonts/urbanist.css",
    "~/assets/css/style.css"
  ],

  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
        }
        
        
      ],
      script: [
        {
          src: "https://sandbox-tailwind-template.netlify.app/assets/js/plugins.js",
        }
       // {src: "https://sandbox-tailwind-template.netlify.app/assets/js/theme.js"}
        
        
      
        
      ],
      
    },
  },

  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
  auth: {
    // enableGlobalAppMiddleware: true,
  },
  
 
  runtimeConfig: {
    databaseUrl: process.env.NUXT_DATABASE_URL
    // GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    // public: {
    //   GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    // },
    
    
  }
  
})