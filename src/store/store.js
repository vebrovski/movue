import Vue from 'vue'
import Vuex from 'vuex'
import { getItems } from '@utils/requests/getItems'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesPopular: [],
    moviesLatest: [],
    moviesNowPlaying: [],
    moviesUpcoming: [],
    moviesTopRated: [],

    tvPopular: [],
    tvLatest: [],
    tvAiringToday: [],
    tvOnTheAir: [],
    tvTopRated: [],

    peoplePopular: [],
    peopleLatest: [],
  },

  mutations: {
    setItemsStore(state, {results, mediaType, listType}) {
      if (mediaType === 'movie') {
        switch(listType) {
          case 'latest':
            state.moviesLatest = results
            break
          
          case 'now_playing':
            state.moviesNowPlaying = results
            break

          case 'popular':
            state.moviesPopular = results
            break

          case 'top_rated':
            state.moviesTopRated = results
            break

          case 'upcoming':
            state.moviesUpcoming = results
            break

          default:
            return;
        }
      }

      if (mediaType === 'tv') {
        switch(listType) {
          case 'latest':
            state.tvLatest = results
            break
          
          case 'airing_today':
            state.tvAiringToday = results
            break

          case 'on_the_air':
            state.tvPopular = results
            break

          case 'top_rated':
            state.tvTopRated = results
            break

          case 'popular':
            state.tvPopular = results
            break

          default:
            return;
        }
      }

      if (mediaType === 'people') {
        switch(listType) {
          case 'latest':
            state.peopleLatest = results
            break

          case 'popular':
            state.peoplePopular = results
            break

          default:
            return;
        }
      }
    }
  },

  actions: {
    getItemsStore( { commit }, { mediaType, listType } ) {
      getItems(mediaType, listType).then(response => {
        commit('setItemsStore', {
          results: response.data.results,
          mediaType: mediaType,
          listType: listType
        })
      })
    }
  },

  modules: {
  }
})
