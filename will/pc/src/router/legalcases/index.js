let _import = (index) => {
  return import( /* webpackChunkName: "legalcases" */ '@/views/legalcases/' + index)
}

export default [{
  path: '/legalcases',
  component() {
    return _import('index')
  },
  name: 'legalcases',
  meta: {
    type: 'legalcases',
    title: '法规案例'
  }
}, {
  path: '/legalcases/detail',
  component() {
    return _import('detail')
  },
  name: 'legalcases-detail',
  meta: {
    type: 'legalcases-detail',
    title: '法规案例详情'
  }
}]
