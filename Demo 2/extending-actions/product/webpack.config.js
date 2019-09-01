const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  stats: 'minimal',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  }
};