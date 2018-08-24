const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      './src/js/components/container',
      './src/js/components/presentational',
      './node_modules'
    ]

  },
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(j|t)sx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      },

    }, {
      test: /\.html$/,
      use: [{
        loader: "html-loader"
      }]
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};