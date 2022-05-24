<script setup lang="ts">
import { computed, ref, Ref, reactive, watchEffect } from 'vue';
const firstName: Ref<string> = ref('ryan');
const lastName: Ref<string> = ref('zhao');
const stop = watchEffect((oninvalidate) => {
  console.log('watchEffect-------');
  //   清除副作用
  // 就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖
  console.log(firstName.value);
  console.log(lastName.value);
  oninvalidate(() => {
    console.log('oninvalidate--');
  });
}, {
  onTrigger(e) {
    console.log('onTrigger---', e);
  }
});

watchEffect(() => {
  const div = document.getElementById('flushId');
  console.log('watchEffect---', div)
}, {
  // 更新时机	
  flush: 'post',
  // pre	组件更新前执行
	// sync 强制效果始终同步触发
  // post 组件更新后执行
  onTrigger(e) {
    console.log('onTrigger---');
    console.log(e);
  }
});

</script>

<template>
  <hr />
  <h1>WatchEffect</h1>
  <h5>oninvalidate</h5>
  <input placeholder="firstName" v-model="firstName" />
  <input placeholder="lastName" v-model="lastName" />
  <button @click="stop">stop watchEffect</button>

  <h5>flush: 'post'</h5>
  <div id="flushId">呵呵呵</div>


</template>


