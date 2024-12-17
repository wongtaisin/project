import commonRightMenu from './src/main'

/* istanbul ignore next */
commonRightMenu.install = function (Vue) {
  Vue.component(commonRightMenu.name, commonRightMenu)
}

export default commonRightMenu
