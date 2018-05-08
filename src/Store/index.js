import Vue from 'vue'
import Vuex from 'vuex'
import musicLibrary from './modules/music-library'
import controls from './modules/controls'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    musicLibrary,
    controls
  }
})
