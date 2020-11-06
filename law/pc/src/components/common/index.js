import commonBannerImg from './commonBannerImg/index'
import commonInsideTitle from './commonInsideTitle/index'
import commonpageContainer from './commonpageContainer/index'
import commonError from './commonError/index'
import commonDateList from './commonDateList/index'
import commonRightMenu from './commonRightMenu/index'
import commonScrollTop from './commonScrollTop/index'
import directives from './directives/index' // 公共指令
import utils from './utils/index'

const components = [
  commonBannerImg,
  commonInsideTitle,
  commonpageContainer,
  commonError,
  commonDateList,
  commonRightMenu,
  commonScrollTop
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
