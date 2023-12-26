<template>
  <div>This is home page</div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '@/store/index.js'

const authUser = computed(() => store.getters['authUserModule/getAuthUser'])
console.log(authUser.value)
</script>