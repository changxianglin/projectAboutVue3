<template>
  <div class="child">
    <h1>{{ infoStore.count }}--{{ infoStore.total }}</h1>
    <button @click="updateCount">changeData</button>
  </div>
</template>

<script lang="ts" setup>
import useInfoStore from '../store/modules/info'

const infoStore = useInfoStore()
const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}

const updateCount = () => {
  infoStore.updateNum()
}
</script>


<style scoped>
  .child {
    width: 200px;
    height: 200px;
    background: yellowgreen;
  }
</style>