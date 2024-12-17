/**
 * @Author: wingddd wongtaisin1024@gmail.com
 * @Date: 2024-12-14 15:26:34
 * @LastEditors: wingddd wongtaisin1024@gmail.com
 * @LastEditTime: 2024-12-16 18:03:07
 * @Description:
 * 这是一个Vue2子应用的入口文件,主要实现了以下功能:
 * 1. 导入必要的依赖和组件
 * 2. 定义了渲染函数render和qiankun生命周期函数
 * 3. 根据是否在qiankun环境下执行不同的渲染逻辑
 */
import Vue from 'vue'
import App from './App.vue'
import './public-path.js'
import router from './router'
// import store from './store'

/**
 * @description: Vue应用实例
 * @type {any} Vue应用实例
 */
let instance = null

/**
 * @description: 渲染Vue应用
 * @param {any} props - 主应用传递的参数
 */
function render(props = {}) {
	const { container } = props
	instance = new Vue({
		router,
		// store,
		render: h => h(App)
	}).$mount(container ? container.querySelector('#app-vue2') : '#app-vue2')
}

/**
 * @description: 子应用初始化
 */
export async function bootstrap() {
	console.log('vue2 app bootstraped')
}

/**
 * @description: 挂载子应用
 * @param {any} props - 主应用传递的参数
 */
export async function mount(props) {
	console.log('vue2 app mounted', props)
	render(props)
}

/**
 * @description: 卸载子应用
 */
export async function unmount() {
	instance.$destroy()
	instance.$el.innerHTML = ''
	instance = null
}

// 根据运行环境决定渲染方式
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}
