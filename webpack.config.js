const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: [
      './src/index.js', 
      'normalize.css',
      './node_modules/material-components-web/dist/material-components-web.min.css'
    ],
    vendor: [
      'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'redux-actions', 'reselect', 
      './node_modules/material-components-web/dist/material-components-web.min'
    ]
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
      utils      : path.resolve(__dirname, 'src', 'utils')
    }
  },
  externals: {
    'lodash': '_',
    //'material-components-web' : 'mdc'
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
  devtool : 'source-map',
  plugins : [
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new BundleAnalyzerPlugin()
  ]
};
