import axios from '@/axios'
import _utils from '@/components/common/utils'

const actions = {
  getPracticeAreas({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/research',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getPracticeAreas', {
          data: res.data.data
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  },
  getPracticeAreasDetail({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/research-detail',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getPracticeAreasDetail', {
          data: res.data.data
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}
export default actions
