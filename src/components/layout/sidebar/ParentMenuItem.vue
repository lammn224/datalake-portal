<template>
  <el-sub-menu :index="item.route">
    <template #title>
      <el-icon>
        <font-awesome-icon :icon="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <child-menu-item v-for="(child, idx) in item.children" :key="idx" :item="child" />
  </el-sub-menu>
</template>

<script setup>
import ChildMenuItem from '@/components/layout/sidebar/ChildMenuItem.vue'

defineProps({
  item: Object
})
</script>

<style></style>