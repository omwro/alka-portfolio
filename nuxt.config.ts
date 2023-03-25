// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/google-fonts',
        '@nuxt/image-edge'
    ],
    css: ['@/assets/css/tailwind.css'],
    app: {
        head: {
            title: 'Raif Kaya - Portfolio Website - Cyber Security Engineer',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'my website description'
                }
            ],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png'
                }, {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png'
                }, {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png'
                }, {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                }, {
                    rel: 'mask-icon',
                    href: '/safari-pinned-tab.svg',
                    color: "#1770b5"
                }
            ]
        }
    },
    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600, 700, 800]
        },
        download: true
    }
})
