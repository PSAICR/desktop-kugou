import axios from 'axios'

const state = {
  play_url: '',
  current_music_name: '酷狗音乐'
}

const actions = {
  play ({ commit }, payload) {
    axios.get('/www/yy/index.php?r=play/getdata&hash=' + payload).then((res) => {
      commit('play', {
        play_url: res.data.data.play_url,
        current_music_name: res.data.data.audio_name
      })
    })
  }
}

// 管理数据 对state发生改变
const mutations = {
  play (state, payload) {
    state.play_url = payload.play_url
    state.current_music_name = payload.current_music_name
  }
}
const getters = {
  play_url () {
    return state.play_url
  },
  current_music_name () {
    return state.current_music_name
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
