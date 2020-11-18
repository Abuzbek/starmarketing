import axios from 'axios'
export default {
  actions: {
    fetchCard ({ commit }) {
      axios
        .get('/api')
        .then(res => res.data)
        .then(card => {
          console.log(card)
          commit('message', card)
        })
    }
  },
  mutations: {
    card (state, posts) {
      state.card = posts
    }
  },
  state: {
    card: []
  },
  getters: {
    card (state) {
      return state.card
    }
  }
}
