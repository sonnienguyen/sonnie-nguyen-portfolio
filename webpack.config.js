var path = require('path');

module.exports = {
  entry: {
    App: "./src/js/App.js",
    Vendors : "./src/js/Vendors.js"
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
