var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: './static/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
