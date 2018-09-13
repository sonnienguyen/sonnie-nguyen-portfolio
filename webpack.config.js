const path = require('path');
const child = require('child_process');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, options) => {
  const isProductionMode = options.mode === 'production';

  // copies entire directories to the build directory
  const copyFiles = [
    { from: './public', to: './' },
  ];

  // remove/clean build folder(s) before webpack builds
  const cleanFolders = {
    path: isProductionMode
      ? ['_site', 'docs/assets']
      : ['_site'],
  };

  const webpackConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: ['./js/app.js', './styles/main.scss'],
    },
    output: {
      path: path.resolve(__dirname, 'docs/assets'),
      publicPath: '/assets/',
      filename: '[name].js',
    },
    // for more information, see https://webpack.js.org/configuration/devtool/#devtool
    devtool: isProductionMode
      ? 'source-map'
      : 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          /* JS loaders config */
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          /* CSS loaders config */
          test: /\.s[ac]ss$/,
          use: [
            // `mini-css-extract-plugin` plugin should be used only on
            // `production` builds without `style-loader` in the loaders chain
            isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      {
        // run shell commands after webpack builds
        apply: compiler => {
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
            child.exec('bundle exec jekyll build --config docs/_config.yml', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          });
        },
      },
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new CopyWebpackPlugin(copyFiles),
      new CleanWebpackPlugin(cleanFolders.path),
    ],
    stats: {
      colors: true,
      timings: true,
      version: false,
      warnings: true,
    },
    // tell webpack to minimize the bundle
    optimization: {
      minimize: isProductionMode,
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: { discardComments: { removeAll: true } },
        }),
      ],
    },
  };
  return webpackConfig;
};
