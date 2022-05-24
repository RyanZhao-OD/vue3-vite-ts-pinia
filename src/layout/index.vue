<template>
  <div class="layout">
    <Menu
      ref="menu"
      :data="menuData"
      title="我是标题"
      @on-click="getList"
      @on-click2="getList2"
    >

    </Menu>
    <div class="layout-right">
      <Header>

      </Header>
      <Content>

      </Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Menu from '@layout/Menu/index.vue';
import Header from '@layout/Header/index.vue';
import Content from '@layout/Content/index.vue';

const menu = ref(null);
let menuData = reactive<number[]>([
  1,2,3
]);
const getList = (list: number[], flag: boolean) => {
  console.log(list);
  menuData = list;
  console.log(menu.value);
};
const getList2 = (list: number[], flag: boolean) => {
  console.log(list);
  menuData = list;
  console.log(menu.value);
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>