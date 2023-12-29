<template>
  <div>
    <el-dialog :model-value="isVisibleRo">
      <template #title>
        <h1>{{ form.name }}</h1>
      </template>
      <span>IP Address</span>
      <el-input v-model="modalForm.ip"></el-input>
      <span>Port</span>
      <el-input v-model="modalForm.port"></el-input>
      <template #footer>
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button @click="handleConfirm">{{ !isUpdate ? 'Create' : 'Update' }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, toRef, watch } from 'vue'

const props = defineProps({
  isShown: Boolean,
  isUpdate: Boolean,
  form: Object
})
const emit = defineEmits(['cancel', 'confirm'])

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
  emit('cancel')
}

const handleConfirm = () => {
  isVisibleRo.value = false
  emit('confirm', modalForm)
}
</script>

<style lang="scss" scoped></style>
