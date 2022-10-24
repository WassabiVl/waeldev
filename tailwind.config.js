module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
        // "./vue/**/*.js",
        // "./vue/**/*.css",
        // "./vue/**/*.scss",
        './vueform.config.js', // or where `vueform.config.js` is located
        './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
        './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
        './vue/vueFormBuilder/**/*.js',
        './vue/vueFormBuilder/**/*.css',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@vueform/vueform/tailwind'),
        require('./vue/vueformBuilder/tailwind'),
    ]
}