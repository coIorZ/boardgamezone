const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [
  new HtmlWebpackPlugin({
    template : './src/views/index.html',
    inject   : true,
  }),
  new LodashWebpackPlugin({
    collections: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
    },
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
];

if(process.env.NODE_ENV === 'production') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: {
    app: [
      './src/index.js',
      'normalize.css',
      'babel-polyfill',
    ],
    vendor: [
      'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'redux-actions',
      'reselect', 'redux-observable', 'lodash', 'rxjs', 'rxjs/Rx', 'styled-components',
      './src/components/styled',
    ],
  },
  output: {
    path          : path.resolve(__dirname, 'dist'),
    filename      : 'js/[name].js',
    publicPath    : '/',
    chunkFilename : 'js/[name].js',
  },
  resolve: {
    alias: {
      common     : path.resolve(__dirname, 'common'),
      components : path.resolve(__dirname, 'src', 'components'),
      modules    : path.resolve(__dirname, 'src', 'modules'),
      utils      : path.resolve(__dirname, 'src', 'utils'),
    },
  },
  module: {
    rules: [
      {
        use     : ['babel-loader'],
        test    : /\.js$/,
        exclude : /node_modules/,
        include : path.resolve(__dirname, 'src'),
      },
      {
        use  : ['style-loader', 'css-loader', 'sass-loader'],
        test : /\.s?css$/,
      },
      {
        use  : ['url-loader?limit=40000'],
        test : /\.(jpe?g|png|gif|svg)$/,
      },
    ],
  },
  devtool : 'source-map',
  plugins : plugins,
};
