import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 12,
    protocolList: [
      'lInch',
      'Aave V1',
    ]
  },
  getters: {
    getIndex: (state) => state.index,
    getProtocolList: (state) => state.protocolList,
  },
  mutations: {
    increment(state) {
      state.index ++;
    },
    setProtocolList (state) {
      state.protocolList = []
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    setProtocolList(context) {
      context.commit('setProtocolList')
    }
  }
})
