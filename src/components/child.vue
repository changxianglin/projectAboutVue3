<template>
  <p>child {{ props.number }}</p>
  <button @click="addNum">add</button>
</template>

<script lang="ts" setup>
const props = defineProps(['number'])
const emits = defineEmits(['add'])
const addNum = () => {
  emits('add')
}
</script>