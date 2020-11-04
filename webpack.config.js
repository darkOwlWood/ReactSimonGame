const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        filename: 'bundle-[fullhash].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/',
    },
    resolve:{
        extensions: ['.js','.jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|png|gift)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            fallback: 'file-loader',
                        }
                    }
                ],
            },
            {
                test: /\.(wav|mp3|ogg)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html'),
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,'modules-manifest.json'),
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname,'dist','modules.js'),
            publicPath: '/',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
}

