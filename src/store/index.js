import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {},
    userName: ''
  },
  mutations: {
    setPosition (state, val) {
      this.position = val
    },
    setUserName (state, val) {
      state.userName = val
    }
  },
  actions: {
    setPosition ({ commit }, val) {
      // 异步请求后段获取当前位置数据
      commit('setPosition', val)
    }
  },
  modules: {
  }
})
