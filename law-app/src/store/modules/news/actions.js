import axios from '@/axios'
import _utils from '@/components/common/utils'

const actions = {
  getNews({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/news',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code == 0) {
        if (params.paramsDate.page === 1) commit('getNews', {
          data: {},
          list: [],
          totalPages: 1
        })
        commit('getNews', {
          data: res.data.data,
          list: [...state.getNews.list, ...res.data.data.news || []],
          totalPages: res.data.data.pageCount
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getNewsDetail({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/news-detail',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code == 0) {
        commit('getNewsDetail', {
          data: res.data.data,
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}
export default actions
