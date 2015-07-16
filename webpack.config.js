var webpack = require('webpack');

module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        path: './app/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({})
    ],
    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.jsx|js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    stage: 0
                }
            }
        ]
    }
};
