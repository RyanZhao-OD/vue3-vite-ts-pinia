<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from 'vue';
import random from '@utils/random';

// const person = {
//   name: 'ryan',
//   age: 18,
// };
const person = reactive({
  name: 'ryan',
  age: 18,
});
// 数据会变化，只有使用了reactive 页面视图才会更新


const state = toRef(person, 'age');
const change = () => {
  state.value = random();
  console.log('person', person);
  console.log('state', state.value);
};

const refs = toRefs(person);
const change2 = () => {
  const { name, age } = refs;
  name.value = `od-${random()}`;
  age.value = random();
  console.log('person', person);
  console.log('name', name.value);
  console.log('age', age.value);
};

const raw = toRaw(person);
</script>

<template>
  <hr />
  <h1>toRef, toRefs, toRaw</h1>
  <h5>toRef</h5>
  <div>{{person}}</div>
  <div>{{state}}</div>
  <button @click="change">change</button>

  <h5>toRefs</h5>
  <div>person: {{person}}</div>
  <div>refs: {{refs}}</div>
  <button @click="change2">change</button>

  <h5>toRaw</h5>
  <div>{{raw}}</div>
</template>


