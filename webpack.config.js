const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path          : path.resolve(__dirname, 'dist'),
    filename      : '[name].js',
    publicPath    : '/dist/',
    chunkFilename : '[id].[name].js'
  },
  resolve: {
    alias: {
      components : path.resolve(__dirname, 'src', 'components'),
      common     : path.resolve(__dirname, 'src', 'common')
    }
  },
  externals: {
    'react'     : 'React',
    'react-dom' : 'ReactDOM'
  },
  module: {
    rules: [
      {
        use     : ['babel-loader'],
        test    : /\.js$/,
        exclude : /node_modules/,
        include : path.resolve(__dirname, 'src')
      },
      {
        use  : ['style-loader', 'css-loader', 'sass-loader'],
        test : /\.s?css$/
      }
    ]
  }
};
