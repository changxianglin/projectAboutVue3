<template>
  <div class="box">
    <h1>我是子组件默认插槽1</h1>
    <slot></slot>
    <h1>我是子组件默认插槽2</h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: skyblue;
  }
</style>