<template>
  <div class="menu">
    Menu
    <div>{{ title }}</div>
    <div>{{ defaultTitle }}</div>
    <div>{{ data }}</div>
    <button @click="clickTap">派发</button>
    <button @click="clickTap2">派发2</button>
    <Tree :data="treeList" @on-click="getItem" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

interface IProps {
  title: string;
  defaultTitle?: string;
  data: number[];
}

const list = reactive<number[]>([4, 5, 6]);
const flag = ref<boolean>(false);
const treeList = reactive<ITreeList[]>([
  {
    name: 'No.1',
    icon: '',
    children: [
      {
        name: 'No.1-1',
        icon: '',
        children: [
          {
            name: 'No.1-1-1',
            icon: '',
          },
          {
            name: 'No.1-1-2',
            icon: '',
          }
        ],
      }
    ],
  },
  {
    name: 'No.2',
    icon: '',
    children: [
      {
        name: 'No.2-1',
        icon: '',
        children: [
          {
            name: 'No.2-1-1',
            icon: '',
          },
          {
            name: 'No.2-1-2',
            icon: '',
          }
        ],
      }
    ],
  },
  {
    name: 'No.3',
    icon: '',
  },
]);
const getItem = (item: ITreeList) => {
  console.log('父组件item:', item);
};

const emit = defineEmits(['on-click', 'on-click2']);
const clickTap = () => {
  emit('on-click', list, true);
};
const clickTap2 = () => {
  emit('on-click2', list, false);
};

withDefaults(defineProps<IProps>(), {
  title: '哈哈哈',
  defaultTitle: 'withDefaults默认标题',
  data() {
    return [1, 2, 2];
  }
});

defineExpose({
  list,
  flag,
});
</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
</style>