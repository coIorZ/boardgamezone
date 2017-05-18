const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: {
    app    : ['./src/index.js'],
    vendor : ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'redux-actions', 'lodash']
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
    'react-dom' : 'ReactDOM',
    'lodash'    : '_'
    //'redux'       : 'Redux',
    //'react-redux' : 'ReactRedux'
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
    }),
    new LodashWebpackPlugin({
      collections : true,
      paths       : true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
