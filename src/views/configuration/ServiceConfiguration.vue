<template>
  <div>
    <el-table
      :data="tableData"
      :border="true"
      header-row-class-name="font-bold text-lg text-white"
      header-cell-class-name="!bg-primary opacity-50"
      style="width: 100%"
      class="text-black"
    >
      <el-table-column type="expand" width="  50">
        <template #default="props">
          <div class="mx-4 my-2 flex justify-between items-center">
            <h1 class="font-bold">IP Address list</h1>
            <el-button @click="handleOpenModal">Create</el-button>
          </div>
          <div class="m-4">
            <el-table :data="props.row.ips" stripe :border="true">
              <el-table-column label="IP" prop="ip" />
              <el-table-column label="Port" prop="port" />
              <el-table-column label="Status" prop="status" />
              <el-table-column label="Operations">
                <template #default="scope">
                  <el-button size="small" @click="handleOpenModal(scope.$index, scope.row)"
                    >Edit</el-button
                  >
                  <el-button size="small" @click="handleOpenDeleteModal(scope.$index, scope.row)"
                    >Delete</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" width="150" />
      <el-table-column label="Description" prop="description" />
    </el-table>

    <service-modal
      @cancel="handleCancel"
      @confirm="handleConfirm"
      :is-shown="isShown"
      :form="form"
    />
    <delete-modal
      @cancel-delete="handleCancelDelete"
      @confirm-delete="handleConfirmDelete"
      :is-shown="isShownDeleteModal"
      :form="form"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ServiceModal from '@/views/configuration/ServiceModal.vue'
import DeleteModal from '@/views/configuration/DeleteModal.vue'

const isShown = ref(false)
const isShownDeleteModal = ref(false)
const isUpdate = ref(false)
const form = reactive({
  ip: '',
  port: '',
  name: ''
})
const handleOpenModal = (idx, row) => {
  console.log(idx, row)
  if (idx != null && row) {
    isUpdate.value = true
    form.ip = row.ip
    form.port = row.port
    form.name = 'ABC'
  } else {
    isUpdate.value = false
  }
  isShown.value = true
}

const handleCancel = () => {
  isShown.value = false
  form.ip = ''
  form.port = ''
  form.name = ''
}
const handleConfirm = (payload) => {
  console.log(payload)
  isShown.value = false
  isShown.value = false
  form.ip = ''
  form.port = ''
  form.name = ''
}

const handleOpenDeleteModal = (idx, row) => {
  console.log('delete', idx, row)
  form.ip = row.ip
  form.name = 'ABC'
  isShownDeleteModal.value = true
}
const handleCancelDelete = () => {
  isShownDeleteModal.value = false
  form.ip = ''
  form.port = ''
  form.name = ''
}
const handleConfirmDelete = (payload) => {
  console.log(payload)
  isShownDeleteModal.value = false
}

const tableData = [
  {
    name: 'Apache Rangers',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    ips: [
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.15',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.16',
        port: '8080',
        status: 'Connected'
      }
    ]
  },
  {
    name: 'Apache Rangers',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    ips: [
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      }
    ]
  },
  {
    name: 'Apache Rangers',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    ips: [
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      }
    ]
  },
  {
    name: 'Apache Rangers',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    ips: [
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      },
      {
        ip: '192.144.27.14',
        port: '8080',
        status: 'Connected'
      }
    ]
  }
]
</script>
