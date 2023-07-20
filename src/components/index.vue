<template>
  <div class="box">
    <h1>provide & inject</h1>
    <hr />
    <Child />
  </div>
</template>

<script lang="ts" setup>
import Child from './child5.vue'

import { ref, provide} from 'vue'

let car = ref('劳斯莱斯')

provide('TOKEN', car)
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 600px;
    background: skyblue;
  }
</style>