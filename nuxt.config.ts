// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    css: ['@/assets/css/tailwind.css'],
    app: {
        head: {
            title: 'Raif Kaya - Portfolio Website - Cyber Security Engineer',
            htmlAttrs: {
                lang: 'en'
            }
        }
    }
})
