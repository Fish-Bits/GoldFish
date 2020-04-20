const path = require('path');
require('dotenv').config();

module.exports = {
  entry: './client/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              "@babel/plugin-proposal-class-properties"
            ]
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          // Compiles Sass to CSS
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
        include: path.join(__dirname, 'client'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        include: path.join(__dirname, 'client/images')
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/build',
    proxy: {
      '/': 'http://localhost:3000',
      '/auth': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};


