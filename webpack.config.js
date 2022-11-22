const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './bin/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist/bin/'),
    filename: 'index.js',
  },
  optimization: {
    minimize: false,
  },
};
