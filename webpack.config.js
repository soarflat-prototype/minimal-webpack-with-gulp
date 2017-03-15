module.exports = {
  watch: true,
  entry: {
    main: './src/js/app.js',
    main2: './src/js/app2.js',
  },
  output: {
    filename: '[name].bundle.js'
  }
};