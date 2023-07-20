<template>
  <div class="child">
    <h1>我的子组件</h1>
    <hr />
    <Child />
  </div>
</template>

<script lang="ts" setup>
import Child from './inject.vue'
</script>

<style scoped>
  .child {
    width: 300px;
    height: 400px;
    background: yellowgreen;
  }
</style>