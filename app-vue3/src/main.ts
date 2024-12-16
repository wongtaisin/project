/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-14 15:26:34
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 17:41:56
 * @FilePath: \project\app-vue3\src\main.ts
 * @Description:
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'

let app: any = null

const render = (container?: any) => {
	app = createApp(App)
	app.use(router).mount(container ? container.querySelector('#app-vue3') : '#app-vue3')
}

const initQianKun = () => {
	renderWithQiankun({
		mount(props: any) {
			console.log('vue3 app mounted', props)
			const { container } = props
			render(container)
		},
		bootstrap() {
			// 应该添加错误处理
			console.log('vue app bootstrapped')
		},
		unmount() {
			// 应该添加错误处理
			app?.unmount()
		},
		update(props: any) {
			// 建议添加 update 生命周期
			console.log('update props', props)
		}
	})
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
