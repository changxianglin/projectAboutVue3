<template>
  <h1>counter</h1>
  <Child :number = 'num' @add="handleAdd" />
  <hr />
  <Child2 v-model="money" />
  <hr />
  <Child3 v-model:pageNo="pageNo" v-model:pageSize="pageSize" />
</template>

<script lang="ts" setup>
import Child from './child.vue'
import Child2 from './child2.vue'
import Child3 from './child3.vue'
import { ref } from 'vue'

const num = ref<number>(1)
const money = ref<number>(100)

const pageNo = ref<number>(1)
const pageSize = ref<number>(10)

const handleAdd = () => {
  num.value += 1
}
</script>