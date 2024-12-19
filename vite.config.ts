/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:04:56
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 15:43:06
 * @FilePath: \project\vite.config.ts
 * @Description: Vite 配置文件
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [vue()],
	base: './', // 设置基础公共路径
	css: {
		preprocessorOptions: {
			// css预设器配置项
			scss: {
				//设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
				additionalData: `@use "@/assets/css/mixin.scss" as *;`,
				javascriptEnabled: true
			}
		}
	},
	assetsInclude: [resolve(__dirname, './src/assets'), '**/*.json'], // 静态资源处理

	// 路径解析配置
	resolve: {
		extensions: ['.js', '.vue', '.json', '.ts'], // 导入时可以省略的扩展名
		alias: {
			'@': path.resolve(__dirname, 'src'),
			assets: resolve(__dirname, 'assets'),
			build: path.resolve(__dirname, 'build')
		}
	},

	// 开发服务器配置
	server: {
		host: true, // 监听所有地址
		port: 81, // 开发服务器端口
		open: true, // 自动打开浏览器
		cors: false, // 禁用 CORS
		proxy: {
			'/api': {
				target: 'http://192.168.38.31:9000',
				changeOrigin: true,
				rewrite: path => path.replace('/api', '')
			}
		}
	},

	// 构建配置
	build: {
		target: 'modules', // 浏览器兼容目标
		outDir: 'dist', // 输出目录
		assetsDir: 'assets', // 静态资源目录
		sourcemap: false, // 不生成 source map
		minify: 'esbuild', // 使用 esbuild 压缩
		chunkSizeWarningLimit: 1000, // 文件大小警告阈值(kb)
		cssTarget: 'chrome61' // 兼容 Android WebView
	}
})
