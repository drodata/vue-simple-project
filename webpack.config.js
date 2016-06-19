module.exports = {
  // entry point of our application
  entry: './main.js',
  // where to place the compiled bundle
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        loader: 'babel?presets=es2015',
        exclude: /node_modules/
      }
    ]
  }
}
