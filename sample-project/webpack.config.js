const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  context: __dirname + '/app',
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/,
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        loader: 'babel',

        query: {
          presets: ['es2015']
        }
      },
    ]
  },
};
