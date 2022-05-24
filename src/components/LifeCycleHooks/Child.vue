<script setup lang="ts">
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
console.log('Child setup---');
onBeforeMount(() => {
  const h1 = document.getElementById('lifeCycleHooks');
  console.log('Child onBeforeMount----', h1);
});
onMounted(() => {
  const h1 = document.getElementById('lifeCycleHooks');
  console.log('Child onBeforeMount----', h1);
});

onBeforeUpdate(() => {
  console.log('Child onBeforeUpdate----');
});
onUpdated(() => {
  console.log('Child onUpdated----');
});
onBeforeUnmount(() => {
  console.log('Child onBeforeUnmount----');
});
onUnmounted(() => {
  console.log('Child onUnmounted----');
});

</script>

<template>
  <h5>Child</h5>
</template>


