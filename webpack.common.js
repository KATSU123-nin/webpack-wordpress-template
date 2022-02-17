const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = ({ outputFile, outputImg, outputCss }) => ({
    entry:
    {
        main: './src/assets/js/main.js',
        mainCss: './src/assets/styles/main.scss',
        themeCss: './src/styles.css',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `assets/js/${outputFile}.js`,
        clean: true,
    },
    devServer: {
        open: true
    },
    stats: {
        children: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        }
                    },
                    {
                        loader: "css-loader",
                          options: {
                            importLoaders: 2,
                           },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                          // PostCSS側でもソースマップを有効にする
                          sourceMap: true,
                          postcssOptions: {
                            // ベンダープレフィックスを自動付与する
                              plugins: [
                                  require("autoprefixer")({ grid: true })
                              ],
                          },
                        },
                      },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|tff|eot)$/,
                use: [
                    {
                        loader: 'image-webpack-loader'
                    }
                ],
                type: 'asset/resource',
                generator: {
                    filename: `assets/images/${outputImg}[ext]`,
                },
            },
            {
                test: /\.(html|php)$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            },
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            //
            filename: (pathData) => {
                return pathData.chunk.name === 'themeCss' ? 'styles.css' : `assets/styles/${outputCss}.css`;
            }
        }),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.php',
            filename: 'index.php',
            inject: 'body',
            minify: false,
        })
    ]
});



