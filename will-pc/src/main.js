import '@babel/polyfill'
import Vue from 'vue'
import App from './App'
import install from './components/common' // 全局安装
import router from './router/index' // 路由
import store from './store/index' // vuex
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'animate.css'
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'
import VueLazyload from 'vue-lazyload' // 图片懒加载

install(Vue)

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: h => h('router-view')
})