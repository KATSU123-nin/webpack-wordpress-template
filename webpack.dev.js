const webpackMerge = require('webpack-merge').merge;
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const outputImg = '[name]';
const outputCss = 'main';


module.exports = () => webpackMerge(commonConf({ outputFile, outputImg, outputCss }), {
    mode: 'development',
    devtool: 'source-map',
});
