const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')

module.exports = defineConfig({
	transpileDependencies: true
})

module.exports = {
	devServer: {
		port: 7002,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	configureWebpack: {
		output: {
			library: `${name}-[name]`,
			libraryTarget: 'umd', // 把微应用打包成 umd 库格式
			chunkLoadingGlobal: `webpackJsonp_${name}`
		}
	}
}
