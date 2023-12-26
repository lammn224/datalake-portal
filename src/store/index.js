import { createStore } from 'vuex'
import { toggleSidebarModule } from '@/store/toggle-sidebar.module.js'
import { authUserModule } from '@/store/authentication.js'

export const store = createStore({
  modules: {
    toggleSidebarModule,
    authUserModule
  }
})
