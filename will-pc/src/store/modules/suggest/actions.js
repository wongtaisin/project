import axios from '@/axios'
import qs from 'qs'
import _utils from '@/components/common/utils'

const actions = {
  getQuestion({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/contact',
    }).then(res => {
      if (res.data.code === 0) {
        commit('getQuestion', {
          data: res.data.data
        })
      } else _utils.tipMessage(res.data.message)
    })
  },
  getMessage({
    commit,
    state
  }, params) {
    let dataObj = qs.stringify(params.paramsDate)
    axios({
      method: 'post',
      url: '/api/index/suggest',
      data: dataObj
    }).then(res => {
      if (res.data.code === 0) {
        commit('getMessage', res.data.message)
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
