<template>
  <div>
    <div>This is home page</div>
    <div class="grid grid-cols-3 gap-5">
      <card-item
        :service-ips="['10.20.10.10', '10.20.10.10', '10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'INACTIVE'"
      />
    </div>
    <div class="grid grid-cols-3 gap-5">
      <card-item
        :service-ips="['10.20.10.10', '10.20.10.10', '10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'INACTIVE'"
      />
    </div>
    <div class="grid grid-cols-3 gap-5">
      <card-item
        :service-ips="['10.20.10.10', '10.20.10.10', '10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'INACTIVE'"
      />
    </div>
    <div class="grid grid-cols-3 gap-5">
      <card-item
        :service-ips="['10.20.10.10', '10.20.10.10', '10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'ACTIVE'"
      />
      <card-item
        :service-ips="['10.20.10.10']"
        :service-name="'Apache Rangers'"
        :status="'INACTIVE'"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '@/store/index.js'
import CardItem from '@/components/feature/services/CardItem.vue'

const authUser = computed(() => store.getters['authUserModule/getAuthUser'])
console.log(authUser.value)
</script>