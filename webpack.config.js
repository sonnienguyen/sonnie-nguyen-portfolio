var path = require('path');

module.exports = {
  entry: {
    App: "./src/js/App.js",
    Vendor : "./src/js/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
