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
    chunkFilename : 'js/[name].js'
  },
  resolve: {
    alias: {
      common     : path.resolve(__dirname, 'common'),
      components : path.resolve(__dirname, 'src', 'components'),
      utils      : path.resolve(__dirname, 'src', 'utils'),
      shared     : path.resolve(__dirname, 'src', 'shared')
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
      },
      {
        use  : ['url-loader?limit=40000'],
        test : /\.(jpe?g|png|gif|svg)$/
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
