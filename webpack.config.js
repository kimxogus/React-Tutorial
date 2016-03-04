var webpack = require('webpack');

var filename = "react-tutorial-webpack.js";

module.exports = {
    entry: {
        app: __dirname + "\\js\\src/" + filename
    },
    output: {
        path: __dirname + "/js/out",
        filename: filename
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
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