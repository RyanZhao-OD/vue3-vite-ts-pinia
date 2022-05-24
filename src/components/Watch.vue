<script setup lang="ts">
import { ref, watch } from 'vue';
const str = ref('ryan');
watch(str, (newVal, oldVal) => {
  console.log('watch----newVal--oldVal', newVal, oldVal);
});
const obj = ref({
  name: '哈哈',
  company: {
    location: '北京市',
    department: {
      title: 'aaa'
    }
  }
});

watch(obj, (newVal, oldVal) => {
  console.log('watch----newVal--oldVal', newVal.company.department.title, oldVal?.company.department.title);
}, {
  deep: true,
  // immediate: true,
});

</script>

<template>
  <hr />
  <h1>Watch</h1>
  <h5>基础数据类型</h5>
  <input placeholder="str" v-model="str" />

  <h5>引用类型</h5>
  <input placeholder="obj" v-model="obj.company.department.title" />
</template>


