<template>
  <router-link class="text-white" :to="item.route">
    <el-menu-item :index="item.route">
      <el-icon>
        <font-awesome-icon :icon="item.icon" />
      </el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </router-link>
</template>

<script setup>
defineProps({
  item: Object
})
</script>

<style lang="scss" scoped></style>
