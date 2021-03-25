const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const commonConfig = require("./webpack.common");

const prodConfig = {
    mode: "production",
    output: {
        filename: "assets/js/[hash:5].js",
        libraryTarget: "umd",
        umdNamedDefine: true,
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                exclude: "/node_modules/",
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
                include: /\.module\.(css|scss)$/,
            },
            {
                test: /\.(css|scss)$/,
                exclude: "/node_modules/",
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
                exclude: /\.module\.(css|scss)$/,
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": '"production"',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new OptimizeCssAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].[hash:5].css",
            chunkFilename: "assets/css/[id].[hash:5].css",
        }),
    ],

    optimization: {
        mangleWasmImports: true,
        mergeDuplicateChunks: true,
        minimize: true,
        nodeEnv: "production",
        splitChunks: {
            cacheGroups: {
                js: {
                    test: /\.js$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 7,
                },
                css: {
                    test: /\.s?[ac]ss$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                },
            },
        },
    },
};

module.exports = merge(commonConfig, prodConfig);
