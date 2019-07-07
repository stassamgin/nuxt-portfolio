export const state = () => ({
  data: {}
})

export const getters = {
  getClientData: state => state.data
}

export const mutations = {
  setClientData(state, payload) {
    state.data = payload
  }
}

export const actions = {
  async clietnData({ commit }, payload) {
    const { data } = await this.$axios.get('/api/client/data')

    commit('setClientData', data);
  }
}
