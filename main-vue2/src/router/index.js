import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
	mode: 'history', // 主应用需要开启
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router
