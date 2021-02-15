export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'MyTeacher.Tech',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
            { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i' },

        ],

        script: [{
            src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
        }, {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js',
        }, {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js',
        }, {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ResponsiveSlides.js/1.55/responsiveslides.min.js',
        }, {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js',
        }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/css/bootstrap.css',
        '~assets/css/style.css',
        '~assets/css/fontawesome-all.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // { src: '~/plugins/jquery-2.2.3.min.js' },
        // { src: '~/plugins/bootstrap.js' },
        // { src: '~/plugins/responsiveslides.min.js' },
        // { src: '~/plugins/easing.js' },
        // { src: '~/plugins/move-top.js' },
        // { src: '~/plugins/SmoothScroll.min.js' },


    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    server: {
        port: 3000 // default: 3000
    }


}
