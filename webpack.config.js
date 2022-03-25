const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './TestTask2.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'TestTask2.bundle.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
}