export const toggleQuickUserModule = {
  namespaced: true,
  state: () => {
    return {
      isShown: false
    }
  },
  mutations: {
    toggle(state, payload) {
      state.isShown = payload
    }
  },
  actions: {
    toggle(context, payload) {
      context.commit('toggle', payload)
    }
  },
  getters: {
    isShownStatus(state) {
      return state.isShown
    }
  }
}
