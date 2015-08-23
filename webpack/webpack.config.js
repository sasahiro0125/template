var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'sass' }
        ]
    }
};
