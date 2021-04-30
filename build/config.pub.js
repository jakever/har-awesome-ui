const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'components': utils.resolve('packages'),
            'har-ui': utils.resolve('lib/index.js'),
        }
    },
}
