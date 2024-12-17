let _import = (index) => {
  return import( /* webpackChunkName: "institution" */ '@/views/institution/' + index)
}

export default [{
  path: '/institution',
  component() {
    return _import('index')
  },
  name: 'institution',
  meta: {
    type: 'institution',
    title: '机构设置'
  }
}]
