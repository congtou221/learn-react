module.exports = {
    //入口
    entry: './entry.js',
    // 出口
    output: {
        path: __dirname,
        filename: './dest/bundle.js'
    },
    module:{
        loaders:[{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                compact: false,
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }]
    }
}