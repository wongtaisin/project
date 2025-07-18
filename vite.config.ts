/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:04:56
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-07-18 09:57:44
 * @FilePath: \project\vite.config.ts
 * @Description: Vite 配置文件
 *
 * Copyright (c) 2025 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import path, { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'], // 自动导入vue相关函数，如：ref，reactive，toRef等
			resolvers: [
				ElementPlusResolver() // 配置Element-plus自动按需导入
				// 自动引入图标组件
				// IconsResolver({
				//   prefix: 'Icon'
				// })
			],
			eslintrc: {
				enabled: true,
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true
			} //eslint 报 no-undef 错误，添加此项会生成.eslintrc-auto-import.json 文件
		}),
		Components({
			resolvers: [
				ElementPlusResolver() // 配置Element-plus自动按需导入
			]
		}),
		Icons({ autoInstall: true })
	],
	base: isProd ? '/' : '/', // 打包路径，根据实际环境来
	css: {
		preprocessorOptions: {
			// CSS 预处理器配置
			scss: {
				// 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin，element-plus的命名空间）
				additionalData: `@use "@/assets/css/mixin.scss" as *;`,
				javascriptEnabled: true
			}
		},
		modules: {
			// 生成的类名格式
			generateScopedName: '[name]_[local]_[hash:base64:5]',
			// 是否启用 camelCase 转换
			localsConvention: 'camelCase' // 驼峰命名
		}
	},

	assetsInclude: [resolve(__dirname, './src/assets'), '**/*.json'], // 静态资源处理

	// 路径解析配置
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'], // 导入时可以省略的扩展名
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)), // src 路径别名
			assets: resolve(__dirname, 'assets'), // 资源路径别名
			build: path.resolve(__dirname, 'build') // 构建路径别名
		}
	},
	server: {
		host: true, // 监听所有地址
		port: 8888, // 开发服务器端口
		open: true, // 自动打开浏览器
		cors: false, // 禁用 CORS
		origin: '/', // 配置本地查看图片 iconfont 的路径需要
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		proxy: {
			'/api': {
				target: 'http://192.168.38.31:9000',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			},
			'/admin': {
				target: 'http://192.168.38.31:8080',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/admin/, '')
			}
		}
	},
	// 构建配置
	build: {
		target: 'modules', // 浏览器兼容目标 'es2015'
		outDir: 'dist', // 输出目录
		assetsDir: 'assets', // 静态资源目录
		sourcemap: false, // 不生成 source map
		minify: 'esbuild', // 使用 esbuild 压缩
		chunkSizeWarningLimit: 1000, // 文件大小警告阈值(kb)
		cssTarget: 'chrome61', // 兼容 Android WebView
		rollupOptions: {
			output: {
				entryFileNames: 'assets/js/[name].[hash].js',
				chunkFileNames: 'assets/js/[name].[hash].js',
				assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
			}
		}
	},
	esbuild: {
		drop: isProd ? ['console', 'debugger'] : []
	}
})
