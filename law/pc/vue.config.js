// process.env.NODE_ENV === 'development'; // 或简写 dev，意为开发环境
// process.env.NODE_ENV === 'production'; // 或简写 prod，意为生产环境
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 判断是否生产环境

// 去除冗余的css
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

//  开启 gzip 压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  transpileDependencies: [], // 通过 Babel 显式转译一个依赖
  baseUrl: IS_PROD ? process.env.VUE_APP_SRC || "/webapp/pc/" : "./",
  assetsDir: 'assets', // 静态资源目录
  outputDir: process.env.outputDir || '../../../law/web/webapp/pc', // 输出文件目录
  productionSourceMap: false, // 去除map文件
  chainWebpack: config => { // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  },
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    port: 8010,
    proxy: { // 跨域处理
      '/api': { // 将 www.exaple.com 印射为/apis
        target: 'http://118.89.64.135/', // 接口域名 测试http://129.204.194.44
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          // '^/api': '' // 需要rewrite的,
        }
      }
    }
  },
  // webpack-dev-server 相关配置 谨慎使用（jdx失去分屏效果）
  // configureWebpack: config => {
  //   if (IS_PROD) {
  //     const plugins = []
  //     plugins.push(
  //       new PurgecssPlugin({
  //         paths: glob.sync([
  //           path.join(__dirname, './src/index.html'),
  //           path.join(__dirname, './**/*.vue'),
  //           path.join(__dirname, './src/**/*.js')
  //         ])
  //       }),
  //       new CompressionWebpackPlugin({
  //         filename: '[path].gz[query]',
  //         algorithm: 'gzip',
  //         test: productionGzipExtensions,
  //         threshold: 10240,
  //         minRatio: 0.8
  //       })
  //     );
  //     config.plugins = [
  //       ...config.plugins,
  //       ...plugins
  //     ];
  //   }
  // }
}
