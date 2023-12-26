<template>
  <div>
    <div class="w-72 flex items-center p-1 justify-between">
      <font-awesome-icon
        @click="toggleSidebar"
        class="cursor-pointer text-white pl-4 pr-6 py-4"
        icon="fa-solid fa-bars"
        size="xl"
      />
      <h1 class="pr-2 text-white cursor-pointer" @click="$router.push('/')">DATALAKE PORTAL</h1>
      <img :src="'/viettel.png'" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const isCollapse = computed(() => store.getters['toggleSidebarModule/collapseStatus'])

const toggleSidebar = () => {
  store.dispatch('toggleSidebarModule/toggle', !isCollapse.value)
}
</script>

<style lang="scss" scoped></style>