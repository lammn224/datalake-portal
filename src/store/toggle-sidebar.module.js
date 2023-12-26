export const toggleSidebarModule = {
  namespaced: true,
  state: () => {
    return {
      isCollapse: true
    }
  },
  mutations: {
    toggle(state, payload) {
      state.isCollapse = payload
    }
  },
  actions: {
    toggle(context, payload) {
      context.commit('toggle', payload)
    }
  },
  getters: {
    collapseStatus(state) {
      return state.isCollapse
    }
  }
}
