<template>
  <div :title="$attrs.title">
    <el-button :="$attrs"></el-button>
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';

const $attrs = useAttrs()
</script>