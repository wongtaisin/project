// process.env.NODE_ENV === 'development'; // 或简写 dev，意为开发环境
// process.env.NODE_ENV === 'production'; // 或简写 prod，意为生产环境
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV) // 判断是否生产环境

// 压缩图片
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

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
  outputDir: process.env.outputDir || '../../../testament_bank/web/webapp/pc', // 输出文件目录
  productionSourceMap: false, // 去除map文件
  css: {
    modules: false, // 启用 CSS modules
    extract: IS_PROD ? true : false, // 是否使用css分离插件
    sourceMap: false // 开启 CSS source maps，一般不建议开启
  },
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
    port: 8020,
    proxy: { // 跨域处理
      '/api': { // 将 www.exaple.com 印射为/apis
        // target: 'http://testament.hxz-dev.cn/', // 测试域名
        target: 'http://www.szwills.org/', // 正式域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          // '^/api': '' // 需要rewrite的,
        }
      }
    }
  },
  // webpack-dev-server 相关配置 谨慎使用（失去分屏效果）
  // configureWebpack: config => {
  //   if (IS_PROD) {
  //     const plugins = []
  //     plugins.push(
  //       new ImageminPlugin({ // 压缩图片
  //         plugins: [
  //           imageminMozjpeg({
  //             quality: 65,
  //             progressive: true
  //           })
  //         ]
  //       }),
  //       new PurgecssPlugin({ // 剔除相同代码
  //         paths: glob.sync([
  //           path.join(__dirname, './src/index.html'),
  //           path.join(__dirname, './**/*.vue'),
  //           path.join(__dirname, './src/**/*.js')
  //         ])
  //       }),
  //       new CompressionWebpackPlugin({ // 压缩成gzip
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