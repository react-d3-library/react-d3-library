var webpack = require('webpack');

module.exports = {
  entry: './src/demo/index.js',
  output: {
    filename: './static/js/bundle.js'
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
