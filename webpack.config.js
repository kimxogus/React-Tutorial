var webpack = require('webpack');

module.exports = {
    entry: {
        main: __dirname + "/js/src/main.js",
        "react-tutorial-webpack": __dirname + "/js/src/react-tutorial-webpack.js",
        UBaeZi: __dirname + "/js/src/UBaeZi/UBaeZi.js"
    },
    output: {
        path: __dirname + "/js/out",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loader: "style!css"
            },
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};