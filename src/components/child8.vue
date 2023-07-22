<template>
  <div class="child8">
    {{ infoStore.count }}
    <p @click="updateTodo">{{ todoStore.arr}} {{ todoStore.total }}</p>
  </div>
</template>

<script lang="ts" setup>
import useInfoStore from '../store/modules/info'

const infoStore = useInfoStore()


import useTodoStore from '../store/modules/todo'

const todoStore = useTodoStore()

const updateTodo = () => {
  todoStore.updateTodo()
}

const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}
</script>

<style scoped>
.child8 {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>