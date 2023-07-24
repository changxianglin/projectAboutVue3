<template>
  <p>slot</p>
  <TestSlot>
    <div>
      <pre>大江东去浪淘尽，千古风流人物。</pre>
    </div>
    <!--  -->
    <template #a>
      <div>具名插槽位置结构a</div>
    </template>
    <template v-slot:b>
      <div>具名插槽位置结构b</div>
    </template>
  </TestSlot>
</template>

<script lang="ts" setup>
import TestSlot from './testSlot.vue'
</script>