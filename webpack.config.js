var webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + "\\js\\src/entry.js"
    },
    output: {
        path: __dirname + "/js/out",
        filename: "bundle.js"
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