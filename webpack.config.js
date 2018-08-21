const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/world.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  devtool: 'source-map'
};
