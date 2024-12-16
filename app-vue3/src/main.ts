/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-14 15:26:34
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 18:03:07
 * @FilePath: \project\app-vue3\src\main.ts
 * @Description:
 * 这是一个Vue3子应用的入口文件,主要实现了以下功能:
 * 1. 导入必要的依赖和组件
 * 2. 定义了渲染函数render和qiankun生命周期函数
 * 3. 根据是否在qiankun环境下执行不同的渲染逻辑
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'

/**
 * @description: Vue应用实例
 * @type {any} Vue应用实例
 * @note: 将app定义为全局变量的原因:
 * 1. 生命周期管理 - 可在整个生命周期中保持对Vue实例的引用
 * 2. 跨函数访问 - 允许render和unmount函数访问同一个实例
 * 3. 状态重置 - 每次重新挂载时创建新实例,确保状态清洁
 * 4. 内存管理 - 可在unmount时明确卸载,防止内存泄漏
 */
let app: any = null

/**
 * @description: 渲染Vue应用
 * @param {any} container - 容器元素,qiankun环境下由主应用提供
 */
const render = (container?: any) => {
	app = createApp(App) // 每次挂载重新创建实例,避免状态污染
	app.use(router).mount(container ? container.querySelector('#app-vue3') : '#app-vue3')
}

/**
 * @description: 初始化qiankun配置
 * @note: 定义了qiankun的各个生命周期函数
 */
const initQianKun = () => {
	renderWithQiankun({
		/**
		 * @description: 挂载子应用
		 * @param {any} props - 主应用传递的参数
		 */
		mount(props: any) {
			console.log('vue3 app mounted', props)
			const { container } = props
			render(container)
		},
		/**
		 * @description: 子应用初始化
		 */
		bootstrap() {
			console.log('vue app bootstrapped')
		},
		/**
		 * @description: 卸载子应用
		 * @note: 需要同时卸载app实例并清除引用
		 */
		unmount() {
			app?.unmount()
			app = null
		},
		/**
		 * @description: 更新子应用
		 * @param {any} props - 更新的参数
		 */
		update(props: any) {
			console.log('update props', props)
		}
	})
}

// 根据运行环境决定渲染方式
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
