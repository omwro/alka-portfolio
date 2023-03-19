module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '480px'
            },
            colors: {
                primary: {
                    DEFAULT: '#379BE5',
                    'background': '#011631',
                    'block': "#021E42",
                    'border': '#043778',
                    'text': "#FFFFFF",
                    'gray': "#748397",
                    'darkgray': "#1f2630"
                },
                secondary: {
                    DEFAULT: '#1E857D',
                }
            }
        }
    },
    plugins: []
}