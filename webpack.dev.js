const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: require.resolve("babel-loader"),
                        options: {
                            plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]-[hash:base64:5]",
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
                use: [
                    {
                        loader: "style-loader",
                    },
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/",
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            hash: true,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: false,
            publicPath: true,
        },
    },
};

module.exports = merge(commonConfig, devConfig);
