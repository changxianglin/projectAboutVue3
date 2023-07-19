<template>
  <div class="dau">
    <h1>子组件2{{ money }}</h1>
    <button @click="handler($parent)">父组件给点数据</button>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const money = ref(666)

const handler = ($parent) => {
  money.value += 100
  $parent.money -= 100
}

const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}
</script>

<style scoped>
.dau {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>