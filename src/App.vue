
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import RefDemo from './components/Ref.vue';
import ReactiveDemo from './components/Reactive.vue';
import ToRefToRefsToRaw from './components/ToRefToRefsToRaw.vue';
import ComputedDemo from '@components/Computed.vue';
import WatchDemo from '@components/Watch.vue';
import WatchEffectDemo from '@components/WatchEffect.vue';
import LifeCycleHooks from '@components/LifeCycleHooks/index.vue';
import Layout from '@layout/index.vue';
import '@assets/css/reset.less';
</script>

<template>
<!-- 
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <RefDemo />
  <ReactiveDemo />
  <ToRefToRefsToRaw />
  <ComputedDemo />
  <WatchDemo />
  <WatchEffectDemo />
  <LifeCycleHooks /> -->
  <Layout />
</template>

<style>
html, body, #app {
  height: 100%;
  overflow: hidden;
}
</style>
