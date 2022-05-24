<template>
  <div
    class="tree"
    :key="index"
    v-for="(item, index) in data"
    @click.stop="clickItem(item)"
  >
    {{ item.name }}
    <TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children" />
  </div>
</template>

<script setup lang="ts">
import TreeItem from './index.vue';
interface IProps {
  data?: ITreeList[];
}
defineProps<IProps>();
const emit = defineEmits(['on-click']);

const clickItem = (item: ITreeList) => {
  console.log(item);
  emit('on-click', item);
};
</script>
<script lang="ts">

export default {
  name: 'TreeItem',
}
</script>

<style lang="less" scoped>
@border: #ccc;
.tree {
  border: 1px solid @border;
  margin-left: 10px;
  &:hover {
    box-shadow: 0 0 10px @border;
  }
}
</style>