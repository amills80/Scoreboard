const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: [
        //   {loader: 'babel-loader'},
        // ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
