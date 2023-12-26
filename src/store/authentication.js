export const authUserModule = {
  namespaced: true,
  state: () => {
    return {
      authUser: {
        name: 'lam',
        mnv: '434824',
        email: 'lammn2@viettel.com'
      }
    }
  },
  mutations: {
    setAuthUser(state, payload) {
      state.authUser = payload
    }
  },
  actions: {
    setAuthUser(context, payload) {
      context.commit('setAuthUser', payload)
    }
  },
  getters: {
    getAuthUser(state) {
      return state.authUser
    }
  }
}
