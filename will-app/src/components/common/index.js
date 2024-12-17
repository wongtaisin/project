import commonBannerImg from './commonBannerImg/index'
import commonInsideTitle from './commonInsideTitle/index'
import commonError from './commonError/index'
import directives from './directives/index' // 公共指令
import utils from './utils/index'

const components = [
  commonBannerImg,
  commonInsideTitle,
  commonError
]

const install = function (Vue) {
  Vue.prototype._utils = utils
  components.map(component => {
    Vue.component(component.name, component)
  })
  for (let item in directives) {
    Vue.directive(item, directives[item])
  }
}

export default install
