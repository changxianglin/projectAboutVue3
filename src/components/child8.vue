<template>
  <div class="child8">
    {{ infoStore.count }}
  </div>
</template>

<script lang="ts" setup>
import useInfoStore from '../store/modules/info'

const infoStore = useInfoStore()
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