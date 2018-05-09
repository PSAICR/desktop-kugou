
const state = {
  play_url: ''
}
const actions = {
  play ({ commit }, payload) {
    commit('play', payload)
  }
}

const mutations = {
  // play (state, payload) {
  //   console.log(that)
  //   state.play_url = ''
  //   console.log(state.play_url, payload)
  //   if (this.$refs.music.paused) {
  //     this.$refs.music.play()
  //     this.$refs.music.style.background = "url('../../static/img/sprits.png')"
  //     this.$refs.music.style.backgroundPosition = '0px -54px'
  //   } else {
  //     this.$refs.music.pause()
  //     this.$refs.music.style.background = "url('../../static/img/sprite.png')"
  //     this.$refs.music.style.backgroundPosition = '0px 6px'
  //   }
  // }
}

const getters = {
  play_url (state) {
    return state.play_url
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
