<template>
  <el-card class="my-3">
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-primary">{{ serviceName }}</span>
        <el-button
          :class="status === 'ACTIVE' ? '!bg-active ' : status === 'INACTIVE' ? '!bg-inactive' : ''"
          class="!text-white"
          text
          bg
          >{{ status }}
        </el-button>
      </div>
    </template>
    <el-descriptions :column="1" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            IPs
          </div>
        </template>
        <div v-for="(ip, idx) in serviceIps" :key="idx" class="text item">{{ ip }}</div>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup>
// import { ref } from 'vue'
//
// const serviceName = ref('')
// const serviceIps = ref([])

defineProps({
  serviceName: String,
  serviceIps: Array,
  status: String
})

const handleClick = () => {}
</script>

<style lang="scss" scoped></style>
