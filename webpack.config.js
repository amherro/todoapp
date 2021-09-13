const path = require('path');

module.exports = {
  mode: 'production',
  performance: {
    hints: false, 
  },
  devServer: {
      static: './dist',
  },
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};