import commonDateList from './src/main'

/* istanbul ignore next */
commonDateList.install = function (Vue) {
  Vue.component(commonDateList.name, commonDateList)
}

export default commonDateList
