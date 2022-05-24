<template>
  <div>
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <div v-for="(item, index) in names" :key="item.age">
        <slot :data="item" :index="index"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
    <div class="extra1">
      <slot name="extra1"></slot>
    </div>
    <div class="extra2">
      <slot name="extra2"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const names = reactive([
  {
    name: 'name1',
    age: 1,
  },
  {
    name: 'name2',
    age: 2,
  },
  {
    name: 'name3',
    age: 3,
  },
  {
    name: 'name4',
    age: 4,
  },
]);

</script>

<style lang="less" scoped>
.header {
  height: 100px;
  background: red;
  color: #fff;
}
.main {
  height: 100px;
  background: green;
  color: #fff;
}
.footer {
  height: 100px;
  background: blue;
  color: #fff;
}
.extra1 {
  height: 100px;
  background: peru;
  color: #fff;
}
.extra2 {
  height: 100px;
  background: blueviolet;
  color: #fff;
}
</style>