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
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader" 
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};