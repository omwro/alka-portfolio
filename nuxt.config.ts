// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/google-fonts'
    ],
    css: ['@/assets/css/tailwind.css'],
    app: {
        head: {
            title: 'Raif Kaya - Portfolio Website - Cyber Security Engineer',
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600, 700, 800]
        },
        download: true
    }
})
