<template>
  <div class="card">
    <div class="card-header">
      <div>主标题</div>
      <div>副标题</div>
    </div>
    <div v-if="content" class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  content?: string;
}
defineProps<IProps>();
</script>

<style lang="less" scoped>
@border: #ccc;
.card {
  border: 1px solid @border;
  &:hover {
    box-shadow: 0 0 10px @border;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid @border;
  }
  &-content {
    padding: 10px;
  }
}
</style>