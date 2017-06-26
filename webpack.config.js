// requiring webpack.
const webpack = require('webpack');
const path = require('path');

const config = {
  // base directory, absolute path, for resolving entry points and loaders
  context: path.resolve(__dirname, 'src'),
  // relative to context (base directory set above)
  entry: './app.js',
  // Output directory and filename.
  output: {
    path: path.resolve(__dirname, 'dist'),  //Directory
    filename: 'bundle.js' //filename
  },
  // Adding loaders
  module: {
    rules: [{
      test: /\.js$/,  //Regex to test against (testing all js files).
      include: path.resolve(__dirname, 'src'),  //include all js files in this directory.
      // https://webpack.js.org/configuration/module/#useentry
      use: [{
        /*
          - Object
          - Must have loader to be used.
          - It can have a options property being a string or object. This value is passed to the loader, which should interpret it as loader options.
        */
        loader: 'babel-loader',
        options: {
          /* List of options that can be set on babel-loader
            https://babeljs.io/docs/usage/api/#options
          */
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }]
    }]
  }
}

module.exports = config;
