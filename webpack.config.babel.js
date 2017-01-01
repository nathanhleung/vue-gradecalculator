import { optimize, DefinePlugin } from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let plugins = [
  new ExtractTextPlugin('bundle.css'),
];

const productionPlugins = [
  new DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),
  new optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new optimize.OccurenceOrderPlugin(),
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    ...productionPlugins,
  ];
}

const config = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules', 'vue-adsense/'),
        ],
        loaders: ['babel'],
      },
      {
        test: /\.vue$/,
        loaders: ['vue'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css'),
      },
    ],
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
    },
  },
  plugins,
};

export default config;
