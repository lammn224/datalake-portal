<template>
  <div class="flex flex-col h-screen">
    <main-header class="h-[60px] bg-gray-700" />

    <div class="flex flex-1 overflow-hidden">
      <main-sidebar />

      <div class="flex flex-col w-full justify-between overflow-y-auto px-10 pt-4">
        <router-view class="" />
        <div class="opacity-25 pt-2 text-xs">
          <span class="float-end">2024©Datalake</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainSidebar from '@/components/layout/sidebar/MainSidebar.vue'
import MainHeader from '@/components/layout/MainHeader.vue'
</script>

<style scoped></style>
