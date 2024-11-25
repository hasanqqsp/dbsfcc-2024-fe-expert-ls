const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new WorkboxWebpackPlugin.GenerateSW({
    //   swDest: './sw.bundle.js',
    //   runtimeCaching: [
    //     {
    //       urlPattern: ({ url }) =>
    //         url.href.startsWith('https://github-leaderboard-api.vercel.app/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'github-leaderboard-api',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) =>
    //         url.href.startsWith('https://avatars.githubusercontent.com/u/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'github-users-image',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) =>
    //         url.href.startsWith('https://api.github.com'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'github-api',
    //       },
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
