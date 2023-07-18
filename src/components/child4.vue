<template>
<div>
  <h1>useAttrs</h1>
  <el-button type="primary" size="small" :icon="Edit"></el-button>
</div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const props = defineProps(['pageNo', 'pageSize'])
const emits = defineEmits(['update:pageNo', 'update:pageSize'])
const addNum = () => {
  emits('update:pageNo', props.pageNo + 1)
}

const addEnd = () => {
  emits('update:pageSize', props.pageSize + 1)
}
</script>