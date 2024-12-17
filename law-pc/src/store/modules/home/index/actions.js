import axios from '@/axios/index'
import _utils from '@/components/common/utils/index'

const actions = {
  getLanguage({
    commit
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/language',
      params: params.paramsDate,
    }).then(res => {
      if (res.data.code === 0) {
        commit('getLanguage', res.data)
        params.callBack()
      } else _utils.tipMessage(res.data.msg)
    })
  },
  homeData({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: `/api/index/home`
    }).then(res => {
      if (res.data.code === 0) {
        commit('homeData', {
          data: res.data.data
        })
      } else _utils.tipMessage(res.data.msg)
    })
  }
}
export default actions
