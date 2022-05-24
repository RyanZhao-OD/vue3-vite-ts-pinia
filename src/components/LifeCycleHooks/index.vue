<script setup lang="ts">
import Child from '@components/LifeCycleHooks/Child.vue';
import {
  ref,
  Ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated
} from 'vue';
console.log('LifeCycleHooks------')
console.log('setup');
const count: Ref<number> = ref(0);
const showChild: Ref<boolean> = ref(true);
const increase = () => count.value++;
const toggle = () => {
  showChild.value = !showChild.value
};
onBeforeMount(() => {
  const h1 = document.getElementById('lifeCycleHooks');
  console.log('onBeforeMount----', h1);
});
onMounted(() => {
  const h1 = document.getElementById('lifeCycleHooks');
  console.log('onBeforeMount----', h1);
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate----', count.value);
});
onUpdated(() => {
  console.log('onUpdated----', count.value);
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount----');
});
onUnmounted(() => {
  console.log('onUnmounted----');
});

</script>

<template>
  <hr />
  <h1 id="lifeCycleHooks">LifeCycleHooks</h1>
  <div>{{count}}</div>
  <button @click="increase">increase</button>
  <br />
  <Child v-if="showChild" />
  <button @click="toggle">toggle Child</button>

</template>


