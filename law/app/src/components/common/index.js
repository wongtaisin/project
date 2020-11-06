import commonBannerImg from './commonBannerImg/index'
import commonDateList from './commonDateList/index'
import commonInsideTitle from './commonInsideTitle/index'
import commonpageContainer from './commonpageContainer/index'
import commonScroll from './commonScroll/index'
import directives from './directives/index'; // 公共指令
import utils from './utils/index'

const components = [
  commonBannerImg,
  commonDateList,
  commonInsideTitle,
  commonpageContainer,
  commonScroll
]

const install = function (Vue) {
  Vue.prototype.$utils = utils
  components.map(component => {
    Vue.component(component.name, component)
  })
  for (let item in directives) {
    Vue.directive(item, directives[item])
  }
}

export default install
