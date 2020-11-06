import axios from '@/axios'
import _utils from '@/components/common/utils'

const actions = {
  getLegalcases({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/legal-cases',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getLegalcases', {
          data: res.data.data
        })
      } else _utils.tipMessage(res.data.message)
    })
  },
  getLegalcasesDetail({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/legal-cases-detail',
      params: params.paramsDate
    }).then(res => {
      if (res.data.code === 0) {
        commit('getLegalcasesDetail', {
          data: res.data.data
        })
        params.callBack()
      } else _utils.tipMessage(res.data.message)
    })
  }
}
export default actions
