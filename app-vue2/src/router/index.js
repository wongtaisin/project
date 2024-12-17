import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
	mode: 'history', // history模式需要通配所有路由，详见vue-router文档
	// base: process.env.BASE_URL,
	base: window.__POWERED_BY_QIANKUN__ ? '/app-vue2/' : '/',
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router
