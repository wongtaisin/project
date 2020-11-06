module.exports = {
  baseUrl: '/webapp/app/', // 根路径
  assetsDir: 'assets', // 静态资源目录
  outputDir: '../../../law/web/webapp/app', // 输出文件目录
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
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    port: 8011,
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
  }
}
