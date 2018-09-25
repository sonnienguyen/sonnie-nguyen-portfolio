module.exports = {
  plugins: [
    // eslint-disable-next-line
    require('autoprefixer')({
      browsers: ['last 3 version', 'ie >= 10'],
    }),
  ],
};
