/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2026-01-05 14:31:03
 * @FilePath: \main\src\main.ts
 * @Description: Vue应用入口文件
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */
import { createApp, nextTick } from 'vue'

// 导入必要的依赖
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import pinia from './store/index'

// 导入样式文件
import 'element-plus/dist/index.css'
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

// 导入工具函数
import install from './utils/index'

// 创建Vue应用实例并配置
const app = createApp(App)
	.use(router) // 路由配置
	.use(pinia) // 状态管理
	.use(ElementPlus) // UI组件库
	.use(install) // 自定义工具

app.mount('#app')

// 导入乾坤微应用相关
import { start } from 'qiankun'
import { registerApps } from './qiankun/qiankun'

// 注册子应用（不触发加载）
registerApps()

let started = false

function tryStartQiankun() {
	if (started) return

	const container = document.querySelector('#sub-container')
	if (!container) return

	started = true
	start({
		sandbox: {
			experimentalStyleIsolation: true // 开启实验性样式隔离
		},
		singular: false, // 开启单实例模式
		prefetch: true // 开启预加载
	})
}

// 首次尝试
nextTick(tryStartQiankun)

// 路由变化后再次尝试（兼容你现有结构）
router.afterEach(() => {
	nextTick(tryStartQiankun)
})
