import commonScrollTop from './src/main'

/* istanbul ignore next */
commonScrollTop.install = function (Vue) {
  Vue.component(commonScrollTop.name, commonScrollTop)
}

export default commonScrollTop
