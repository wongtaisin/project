let _import = (index) => {
  return import( /* webpackChunkName: "news" */ '@/views/new/' + index)
}

export default [{
  path: '/news',
  component() {
    return _import('index')
  },
  name: 'news',
  meta: {
    type: 'news',
    title: '新闻咨询'
  }
}, {
  path: '/news/detail',
  component() {
    return _import('detail')
  },
  name: 'news-detail',
  meta: {
    type: 'news-detail',
    title: '新闻咨询详情'
  }
}]
