const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs/assets/js'),
    filename: '[name].js',
  },
  // for more information, see https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // run shell commands after webpack builds
    new WebpackShellPlugin({
      onBuildEnd: ['bundle exec jekyll build --config ./docs/_config.yml'],
    }),
    new CleanWebpackPlugin(['_site']),
  ],
  // tell webpack to minimize the bundle
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
    ],
  },
};
