import Vue from 'vue'
import Vuex from 'vuex'
import { getItems } from '@utils/requests/getItems'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popularItems: []
  },
  mutations: {
    setPopularItems(state, payload) {
      state.popularItems = payload
    }
  },
  actions: {
    getPopularItems(context, payload) {
      getItems(payload.mediaType, payload.listType).then(response => {
        context.commit('setPopularItems', response.data.results)
      })
    }
  },
  modules: {
  }
})
