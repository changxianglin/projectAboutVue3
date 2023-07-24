<template>
  <p>slot</p>
  <Test1 :todos="todos">
    <template v-slot="{$row, $index}">
      <span :style="{color: $row.done ? 'green': 'red'}">{{ $row.title }} -- {{ $index }}</span>
    </template>
  </Test1>
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
import Test1 from './test3.vue'

import { ref } from 'vue'

let todos = ref([
  {id: 1, title: '吃饭', done: true},
  {id: 2, title: '睡觉', done: false},
  {id: 3, title: '打豆豆', done: true},
  {id: 4, title: '打代码', done: false},
])

</script>