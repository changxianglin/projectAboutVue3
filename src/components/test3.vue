<template>
  <div class="box">
    <h1>作用域插槽</h1>
    <ul>
      <li v-for="(item, index) in todos" :key="item.id">
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps(['todos'])
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: skyblue;
  }
</style>