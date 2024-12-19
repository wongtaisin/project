/*
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-11-13 08:05:37
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-14 17:07:22
 * @FilePath: \project\src\main.ts
 * @Description: Vue应用入口文件
 *
 * Copyright (c) 2024 by wongtaisin1024@gmail.com, All Rights Reserved.
 */

// 导入必要的依赖
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './pinia/index'
import router from './router/index'

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
