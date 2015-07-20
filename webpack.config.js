var webpack = require('webpack');

module.exports = {
    entry: {
        samples: './src/samples/index.js',
        benchmark: './src/benchmark/index.js'
    },
    output: {
        path: './app/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({})
    ],
    resolve: {
        modulesDirectories: ['src/samples', 'src/benchmark', 'node_modules'],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    stage: 0
                }
            }
        ]
    }
};
