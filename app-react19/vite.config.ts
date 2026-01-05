/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2026-01-05 11:08:08
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-05 17:17:55
 * @FilePath: \project\app-react19\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2026 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
// import react from '@vitejs/plugin-react' // 开启react-compiler
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js' // TODO: qiankun 将 CSS 注入 JS，避免因路径错误导致样式丢失
import qiankun from 'vite-plugin-qiankun'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const urls = {
		production: 'http://localhost:7003/',
		development: '/'
	} as any

	const currentEnv = mode

	console.log('当前环境：', currentEnv, urls[currentEnv])

	return {
		base: urls[currentEnv],
		plugins: [
			// react({
			// 	babel: {
			// 		plugins: [['babel-plugin-react-compiler']]
			// 	}
			// }), // TODO: 关闭之后，可dev模式下，react-compiler不生效，quankun生效
			qiankun('app-react19', { useDevMode: true }),
			cssInjectedByJsPlugin()
		],

		// 开启react-compiler
		esbuild: {
			jsx: 'automatic',
			jsxImportSource: 'react'
		},

		server: {
			port: 7003,
			origin: 'http://localhost:7003',
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}
	}
})
