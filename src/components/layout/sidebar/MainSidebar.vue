<template>
  <div class="h-screen bg-[#1f2937] flex flex-col content-center">
    <el-menu
      :default-active="$route.path"
      active-text-color="#ffd04b"
      background-color="#1f2937"
      class="!border-0"
      :collapse="isCollapse"
      text-color="#fff"
      router
    >
      <!--      <el-menu-item index="home" class="!text-white">-->
      <!--        <div class="h-max flex justify-between items-center">-->
      <!--          <h1 v-if="!isCollapse" class="pr-2">DATALAKE PORTAL</h1>-->
      <!--          <font-awesome-icon-->
      <!--            @click="isCollapse = !isCollapse"-->
      <!--            class="text-white pl-1"-->
      <!--            icon="fa-solid fa-bars"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </el-menu-item>-->

      <component
        :is="menu.children ? ParentMenuItem : SingleMenuItem"
        v-for="(menu, idx) in menuToDisplay"
        :key="idx"
        :item="menu"
      />
    </el-menu>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import menus from '/src/config/menu.config'
import ParentMenuItem from '@/components/layout/sidebar/ParentMenuItem.vue'
import SingleMenuItem from '@/components/layout/sidebar/SingleMenuItem.vue'
import { useStore } from 'vuex'

const menuToDisplay = ref([])
const store = useStore()
const isCollapse = computed(() => store.getters['toggleSidebarModule/collapseStatus'])

const getDisplayMenus = (menus) => {
  return menus.filter((item) => {
    if (item.subMenus) {
      item.subMenus = getDisplayMenus(item.subMenus)
      return item.subMenus.length > 0
    } else {
      return true
    }
  })
}

onMounted(() => {
  menuToDisplay.value = getDisplayMenus(menus)
})
</script>

<style lang="scss" scoped></style>