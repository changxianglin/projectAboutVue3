<template>
  <p>child3 {{ props.pageNo }} - {{ props.pageSize }}</p>
  <button @click="addNum">changeFirst</button>
  <button @click="addEnd">changeEnd</button>
</template>

<script lang="ts" setup>
const props = defineProps(['pageNo', 'pageSize'])
const emits = defineEmits(['update:pageNo', 'update:pageSize'])
const addNum = () => {
  emits('update:pageNo', props.pageNo + 1)
}

const addEnd = () => {
  emits('update:pageSize', props.pageSize + 1)
}
</script>