module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 基准 - 视窗宽度
      unitPrecision: 5, // 转换后单位所带的小数点位数
      viewportUnit: "vw", // 转换后单位
      fontViewportUnit: "vmin", // 转换后字体的单位
      selectorBlackList: [".ignore", ".hairlines"], // 忽略的样式名
      minPixelValue: 1, // 最小px
      mediaQuery: false // 是否转换媒体查询的px单位
    }
  }
}
