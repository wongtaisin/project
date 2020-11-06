const plugins = []

if (['production', 'prod'].includes(process.env.NODE_ENV)) {
  plugins.push("transform-remove-console") // 去除console
}

module.exports = {
  presets: [
    [
      "@vue/app",
      {
        polyfills: ["es6.promise", "es6.symbol"]
      }
    ]
  ],
  plugins: plugins
}
