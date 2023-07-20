<template>
  <div class="child1">
    <h1>孙子组件</h1>
    <p>{{ car }}</p>
    <button @click="updateCar">update</button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const car = inject('TOKEN')

const updateCar = () => {
  car.value = '自行车'
}
const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}
</script>

<style scoped>
  .child1 {
    width: 200px;
    height: 200px;
    background: red;
  }
</style>