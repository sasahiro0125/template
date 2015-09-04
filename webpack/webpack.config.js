// var path = require("path");
var BowerWebpackPlugin = require("bower-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'sass' },
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" }
        ]
    },
    plugins: [
        new BowerWebpackPlugin()
    ],
    postcss: function () {
       return [autoprefixer, precss];
    }
};
