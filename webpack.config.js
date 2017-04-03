var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

/**
 * Created by korovin on 4/3/2017.
 */
module.exports = {
    entry: './app.ts',
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
