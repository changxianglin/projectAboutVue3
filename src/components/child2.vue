<template>
  <p>child2 {{ props.modelValue }}</p>
  <button @click="addNum">up</button>
</template>

<script lang="ts" setup>
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
const addNum = () => {
  emits('update:modelValue', props.modelValue + 10)
}
</script>