module.exports = {
    staticFileGlobs: [
        '/manifest.json',
        '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
        '/images/*'
    ],
    dynamicUrlToDependencies: {
        '/': ['index.html']
    },
    navigateFallback: '/',
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    runtimeCaching: [
        {
        urlPattern: /.*\.(png|jpg|gif|svg)/i,
        handler: 'fastest',
        options: {
            cache: {
            maxEntries: 200,
            name: 'data-images-cache'
            }
        }
        }
    ]
};
