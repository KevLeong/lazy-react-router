const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
module.exports = {
  entry: {
    // 此处的健react，在下面作为[name]被引用
    react: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    // 输出的文件都放到dist目录下
    path: path.resolve(__dirname, 'dist'),
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称
    filename: '[name]_dll.js', // react.js
    // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
    library: '_dll_[name]', // var _dll_react = xxx;
  },
  plugins: [
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和output，library 中保持一致
      // 该字段的值也就是输出的manifest.json 文件中 name 字段的值
      // 例如 react.mainfest.json 中就有 "name": "_dll_react"
      name: '_dll_[name]',
      // manifest.json 用来描述引用了哪些包
      path: path.resolve(__dirname, 'dist', '[name].manifest.json'),
    })
  ]
}
