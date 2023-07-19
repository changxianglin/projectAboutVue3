<template>
  <div class="box">
    <h1>ref 与 $parent</h1>
    <h3>父组件{{ money }}</h3>
    <button @click="handler">向子组件借数据</button>
    <hr />
    <Son ref="son" />
    <hr />
    <Dau />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Son from './son.vue'
import Dau from './daughter.vue'

let money = ref(1000000000)
const son = ref()

const handler = () => {
  money.value += 10
  son.value.money -= 10
  son.value.fly()
}

defineExpose({
  money,
})
</script>

<style scoped>
.box {
  width: 100vw;
  height: 500px;
  background: skyblue;
}
</style>