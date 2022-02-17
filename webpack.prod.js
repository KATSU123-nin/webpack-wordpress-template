const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const outputImg = '[contenthash]';
const outputCss = 'main.[chunkhash]';


module.exports = () => webpackMerge(commonConf({ outputFile, outputImg, outputCss }), {
    mode: 'production',
});
