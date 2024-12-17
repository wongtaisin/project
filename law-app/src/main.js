import Vue from 'vue'
import App from './App'
import install from './components/common' // 全局安装
import router from './router/index' // 路由
import store from './store/index' // vuex
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import 'animate.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/style.scss'
import './assets/iconfont/iconfont.css'
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
// let vConsole = new VConsole() // 初始化

install(Vue)

FastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

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
