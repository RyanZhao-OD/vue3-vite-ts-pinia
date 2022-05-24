
<script setup lang="ts">
import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from 'vue';
const ref1: Ref<string> = ref<string>('呵呵呵呵');
const onChange1 = (e: Event) => {
  console.log('onChange1---', e);
  // console.log(val);
  // console.log(isRef(val));
};

const shallowRef1 = shallowRef({
  name: 'ryan'
});
const change1 = () => {
  shallowRef1.value.name = 'od'; // 不生效
  console.log(shallowRef1.value);
  triggerRef(shallowRef1);

  // shallowRef1.value = { name: 'od1' }; // 生效
  // console.log(shallowRef1.value);
};

function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        console.log('customRef--get');
        track()
        return value
      },
      set(newVal: T) {
        console.log('customRef--set');
        value = newVal
        trigger()
      }
    }
  })
}

let customRef1 = MyRef('ryanzhao')
const change2 = () => {
  customRef1.value = 'hehehehe' + Math.random();
  // triggerRef(message)
};
</script>

<template>
  <hr />
  <h1>Ref</h1>
  <h5>ref</h5>
  <input v-model="ref1" @change="onChange1" />
  <div>ref: {{ref1}}</div>

  <h5>shallowRef、triggerRef</h5>
  <div>{{shallowRef1}}</div>
  <button @click="change1">change</button>

  <h5>customRef</h5>
  <div>{{customRef1}}</div>
  <button @click="change2">change</button>

</template>


