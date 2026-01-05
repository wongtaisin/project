/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2026-01-05 11:08:08
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-05 16:36:26
 * @FilePath: \project\app-react19\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2026 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'

// TODO: react项目，需要build，然后运行生产preview模式下本地才可以正常运行（Vite 开发模式下输出的是 ES Module，qiankun 加载的是 CommonJS 模块，会报错）

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const urls = {
		production: 'http://localhost:7003/',
		development: '/'
	} as any

	const currentEnv = mode

	console.log('currentEnv', currentEnv, urls[currentEnv])

	return {
		base: urls[currentEnv],
		plugins: [
			react({
				babel: {
					plugins: [['babel-plugin-react-compiler']]
				}
			}),
			qiankun('app-react19', { useDevMode: true })
		],
		server: {
			port: 7003,
			origin: 'http://localhost:7003',
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}
	}
})
