import axios from 'axios'

const state = {
  play_url: ''
}

const actions = {
  play ({ commit }, payload) {
    axios.get('/www/yy/index.php?r=play/getdata&hash=' + payload).then((res) => {
      commit('play', res.data.data.play_url)
    })
  }
}

// 管理数据 对state发生改变
const mutations = {
  play (state, payload) {
    state.play_url = payload
    console.log(payload)
  }
}
const getters = {
  play_url () {
    return state.play_url
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
