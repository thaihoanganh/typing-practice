const path = require("path");

const commonConfig = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@assets": path.resolve(__dirname, "src", "assets"),
            "@components": path.resolve(__dirname, "src", "components"),
            "@pages": path.resolve(__dirname, "src", "pages"),
            "@routes": path.resolve(__dirname, "src", "routes"),
            "@shared": path.resolve(__dirname, "src", "shared"),
            "@stores": path.resolve(__dirname, "src", "stores"),
        },
    },

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images",
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/fonts",
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = commonConfig;
