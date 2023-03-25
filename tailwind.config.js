module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        fontFamily: {
            sans: 'Poppins, sans-serif'
        },
        extend: {
            screens: {
                'sm': '480px'
            },
            colors: {
                primary: {
                    DEFAULT: '#1770b5',
                    'light': '#62A3ED',
                    'background': '#FFFFFF',
                    'section': '#f9f9f9',
                    'text': "#2d2e32",
                    'gray': "#748397",
                    'darkgray': "#1f2630"
                },
                secondary: {
                    DEFAULT: '#1E857D',
                }
            },
            borderWidth: {
                DEFAULT: '3px',
            }
        }
    },
    plugins: []
}