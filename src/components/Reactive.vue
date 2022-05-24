<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue';
import random from '@utils/random';
const person = reactive({
  name: 'ryan',
  age: 18,
});
const change = () => {
  person.name = 'od';
  person.age = 17;
};

const hobbies: any[] = reactive([
  '打球', '滑板'
]);
const add = () => {
  hobbies.push(Math.random());
};

const person2 = readonly(person);
const change2 = () => {
  // person2.name = 'od' + random(); // Cannot assign to 'name' because it is a read-only 
  // person2.age = 17;
};

const obj = shallowReactive({
  name: 'name',
  company: {
    location: '北京市',
    department: {
      title: '啊哈哈哈'
    }
  }
});
const change3 = () => {
  obj.name = 'od' + random();
  console.log(obj.name);
};
const change4 = () => {
  obj.company.location = '深圳市' + random();
  console.log(obj.company.location);
};
</script>

<template>
  <hr />
  <h1>Reactive</h1>
  <h5>reactive</h5>
  <div>{{person}}</div>
  <button @click="change">change</button>

  <div>{{hobbies}}</div>
  <button @click="add">add</button>

  <h5>readonly</h5>
  <div>{{person2}}</div>
  <button @click="change2">change</button>

  <h5>shallowReactive</h5>
  <div>{{obj}}</div>
  <button @click="change3">changeName</button>
  <button @click="change4">changeLocation</button>
</template>


