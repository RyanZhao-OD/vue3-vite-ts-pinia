<template>
  <teleport to="body">
    <div class="teleport">this is teleport</div>
  </teleport>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
</script>

<style lang="less" scoped>
.teleport {
  position: absolute;
  bottom: 30px;
  right: 0;
  width: 20px;
  height: 50px;
  background: blueviolet;
}
</style>