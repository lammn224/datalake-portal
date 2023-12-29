<template>
  <div>
    <el-dialog :model-value="isVisibleRo">
      <h1>Confirm delete {{ modalForm.ip }}</h1>
      <template #footer>
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button @click="handleConfirm">Delete</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, toRef, watch } from 'vue'

const props = defineProps({
  isShown: Boolean,
  form: Object
})
const emit = defineEmits(['cancelDelete', 'confirmDelete'])

const isVisibleRo = ref(false)
const isVisible = toRef(props, 'isShown')
let modalForm = reactive({})
watch(isVisible, (value) => {
  isVisibleRo.value = value
})

watch(props.form, (value) => {
  modalForm = value
})

const handleCancel = () => {
  isVisibleRo.value = false
  emit('cancelDelete', false)
}

const handleConfirm = () => {
  isVisibleRo.value = false
  emit('confirmDelete', true)
}
</script>

<style lang="scss" scoped></style>
