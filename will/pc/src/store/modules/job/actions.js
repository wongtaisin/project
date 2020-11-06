import axios from '@/axios'
import _utils from '@/components/common/utils'

const actions = {
  getRecruit({
    commit,
    state
  }, params) {
    axios({
      method: 'get',
      url: '/api/index/recruit',
    }).then(res => {
      if (res.data.code === 0) {
        commit('getRecruit', {
          data: res.data.data,
          jobs: res.data.data.jobs
        })
      } else _utils.tipMessage(res.data.message)
    })
  }
}

export default actions
