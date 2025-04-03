/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2025-04-03 15:01:39
 * @FilePath: \project\src\main.ts
 * @Description: Vue应用入口文件
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

// 导入必要的依赖
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './pinia/index'
import router from './router/index'

// 导入Element Plus相关
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

// 导入样式文件
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

// 导入工具函数
import install from './utils/index'

const app = createApp(App)

// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

// 创建Vue应用实例并配置
const plugins = [pinia, router, install]

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
