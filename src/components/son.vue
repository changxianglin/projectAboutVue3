<template>
  <div class="son">
    <h3>子组件1{{ money }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const money = ref(233)
const fly = () => {
  console.log('I can fly.')
}

defineExpose({
  money,
  fly,
})

const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}
</script>

<style scoped>
.son {
  width: 300px;
  height: 200px;
  background: cyan;
}
</style>