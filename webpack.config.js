const path = require('path');
const child = require('child_process');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    {
      // run shell commands after webpack builds
      apply: compiler => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
          child.exec(
            'bundle exec jekyll build --config ./docs/_config.yml',
            (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            },
          );
        });
      },
    },
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
