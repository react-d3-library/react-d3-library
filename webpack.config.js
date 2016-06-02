var webpack = require('webpack');

module.exports = {
  entry:  __dirname + '/lib/index.js',
  output: {
    filename:  __dirname + '/dist/react-d3-library.js',
    library: 'react-d3-library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
