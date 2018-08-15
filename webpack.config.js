const path = require('path');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }],
              'stage-0',
              'react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    // 打包时找到清单列表，凡是引入的包在清单中能找到将不会打包进来
    new DllReferencePlugin({
      manifest: require('./dist/react.manifest.json'),
    }),
  ]
}