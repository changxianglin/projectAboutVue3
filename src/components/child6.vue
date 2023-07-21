<template>
  <div class="box">
    <h1>Pinia</h1>
    <hr />
    <div class="container">
      <Child />
      <Child1 />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Child from './child7.vue'
import Child1 from './child8.vue'
const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}
</script>

<style scoped>
  .box {
    width: 600px;
    height: 400px;
    background: skyblue;
  }


  .container {
    display: flex;
  }
</style>