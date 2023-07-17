<template>
  <h1>counter</h1>
  <Child :number = 'num' @add="handleAdd" />
</template>

<script lang="ts" setup>
import Child from './child.vue'
import { ref } from 'vue'

const num = ref<number>(1)

const handleAdd = () => {
  num.value += 1
}
</script>