var webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + "\\js\\src/react-tutorial-webpack.js"
    },
    output: {
        path: __dirname + "/js/out",
        filename: "react-tutorial-webpack.js"
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