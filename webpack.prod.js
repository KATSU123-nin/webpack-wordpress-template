const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const outputImg = '[contenthash]';
const outputCss = '[name].[chunkhash]';


module.exports = () => webpackMerge(commonConf({ outputFile, outputImg, outputCss }), {
    mode: 'production',
});
