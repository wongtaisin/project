declare global {
	interface Window {
		__POWERED_BY_QIANKUN__: boolean
	}
}

import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style.css'

let app = createApp(App)

const render = (container?: any) => {
	const targetContainer = container?.querySelector('#app') || '#app'
	app.use(router).mount(targetContainer)
}

const initQianKun = () => {
	renderWithQiankun({
		mount(props) {
			const { container } = props
			render(container)
		},
		bootstrap() {},
		unmount() {
			app?.unmount()
		},
		update: props => {
			// Add your custom update logic here
		}
	})
}

if (!window.__POWERED_BY_QIANKUN__) {
	render()
} else {
	initQianKun()
}
