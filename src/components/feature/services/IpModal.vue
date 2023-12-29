<template>
  <div>
    <el-dialog :model-value="isShown">
      <span>IP Address</span>
      <el-input></el-input>
      <template #footer>
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button>Confirm</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { toRef } from 'vue'

export default {
  props: {
    isVisible: Boolean
  },

  setup(props) {
    const isShown = toRef(props, 'isVisible')

    const handleCancel = () => {
      isShown.value = false
    }

    return { isShown, handleCancel }
  }
}
</script>

<style lang="scss" scoped></style>
