import path from 'path';

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
        test: /.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /.vue$/,
        loaders: ['vue'],
      },
      {
        test: /.css$/,
        loaders: ['style', 'css'],
      }
    ],
  },
};

export default config;
