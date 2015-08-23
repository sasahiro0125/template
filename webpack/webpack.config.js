var path = require("path");
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")],
        extensions: ['', '.js', '.json'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'sass' }
        ]
    },
    plugins: [
        new BowerWebpackPlugin()
    ]
};
