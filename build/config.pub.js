const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('src'),
            'components': utils.resolve('packages'),
            'har-ui': utils.resolve('packages/index.js'),
        }
    },
}
