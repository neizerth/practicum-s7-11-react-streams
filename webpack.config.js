const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack/common');

const productionConfig = require('./config/webpack/production');

const developmentConfig = require('./config/webpack/development');

module.exports = (env, args) => {
    switch(args.mode) {
        case 'development':
            return merge(commonConfig, developmentConfig);
        case 'production':
            return merge(commonConfig, productionConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}