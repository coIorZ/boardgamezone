const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path          : path.resolve(__dirname, 'dist'),
    filename      : 'js/[name].js',
    publicPath    : '/',
    chunkFilename : 'js/[id].[name].js'
  },
  resolve: {
    alias: {
      components : path.resolve(__dirname, 'src', 'components'),
      common     : path.resolve(__dirname, 'common'),
      utils      : path.resolve(__dirname, 'src', 'utils')
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './src/views/index.html',
      inject   : true
    })
  ]
};
