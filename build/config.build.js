const {resolve, getComponentEntries} = require('./utils')
const pub = require('./config.pub')

module.exports = {
    outputDir: resolve('lib'),
    configureWebpack: {
        entry: {
            ...getComponentEntries('packages'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2',
            libraryExport: 'default',
            library: 'har-awesome-ui',
        },
        resolve: pub.resolve,
    },
    css: {
        extract: {
            filename: '[name]/style.css'
        }
    },
    chainWebpack: config => {
        // 在打包组件的时候，并不希望抽离每个组件的公共js出来，而是每个独立打包，于是删除这个配置；
        config.optimization.delete('splitChunks')
        // 不要复制public文件到打包目录
        config.plugins.delete('copy')
        // 因为删除了html插件，所以这两个也没用；
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        // 只打包组件，不生成html页面
        config.plugins.delete('html')
        // 删除hot-module-reload；
        config.plugins.delete('hmr')
        // 删除自动加上的入口：app
        config.entryPoints.delete('app')
        // 打包字体的时候，输出到打包目录的static/fonts目录下；
        config.module
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })
    }
}
