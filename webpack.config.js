var webpack = require('webpack');

module.exports = {
<<<<<<< HEAD
  entry: './client/index.js',
  plugins: [
  new webpack.DefinePlugin({
    // Force HTMLtoJSX to use the in-browser `document` object rather than
    // require the Node-only "jsdom" package.
    IN_BROWSER: true,

    // Expose the version to embed in the final file.
    TURBO_REACT_VERSION: JSON.stringify(require("./package.json").version)
  })
  ],
=======
  entry: './src/demo/index.js',
>>>>>>> 19652cf68bc7b3e5f0e3ef862392a8ca276374d3
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
