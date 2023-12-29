<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="isShown"
      class="fixed inset-0 bg-black bg-opacity-50 z-30"
      @click="toggleQuickUser"
    ></div>

    <!-- QuickUser Content -->
    <div
      class="top-0 right-0 w-[25vw] bg-primary p-6 text-white fixed h-full z-40 ease-in-out duration-500"
      :class="isShown ? 'translate-x-0 ' : 'translate-x-full'"
    >
      <button
        class="flex text-xl text-white items-center cursor-pointer fixed right-6 top-6 z-50"
        @click="toggleQuickUser"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <h3 class="text-4xl font-semibold text-white">QuickUser</h3>
    </div>

    <!-- QuickUser Toggle Button -->
    <div v-if="!isShown">
      <font-awesome-icon
        @click="toggleQuickUser"
        class="text-white"
        size="xl"
        icon="fa-solid fa-user"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isShown = computed(() => store.getters['toggleQuickUserModule/isShownStatus'])

const toggleQuickUser = () => {
  store.dispatch('toggleQuickUserModule/toggle', !isShown.value)
}
</script>
<style lang="scss" scoped></style>