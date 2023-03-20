const webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin");
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
     
      //'process.env.telephone': JSON.stringify('+94 76 2611 811'),
    }),
    new CompressionPlugin()
  ],
}
