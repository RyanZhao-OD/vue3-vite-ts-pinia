<template>
  <div class="content">
    Content
    <div class="tab">
      <div
        class="tab-item"
        v-for="item in tabs"
        :key="item.name"
        @click="switchTab(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <component :is="current.comp"></component>
    <TeleportDemo />
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>loading....</div>
      </template>
    </Suspense>
    <Dialog>
      <template #header>
        <div>dialog-header</div>
      </template>
      <template #default="{data, index}">
        <div>{{ data }} -- {{ index }}</div>
      </template>
      <template #footer>
        <div>dialog-footer</div>
      </template>
      <template #[slotPosition]>
        <div>动态slot</div>
      </template>
    </Dialog>
    <br />
    <div class="content-item" :key="item" v-for="(item, index) in 100">
      {{item}}
      <Card :content="`${index}-${item}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, markRaw, ref, defineAsyncComponent } from 'vue';
import A from './A.vue';
import B from './B.vue';
import C from './C.vue';
import Dialog from '@components/Dialog/index.vue';
import TeleportDemo from '@components/Teleport/index.vue';

const AsyncComponent = defineAsyncComponent(() => import('@components/AsyncComponent/index.vue'));


const slotPosition = ref('extra2');

const tabs = reactive<ITab[]>([
  {
    name: '我是A组件',
    comp: markRaw(A),
  },
  {
    name: '我是B组件',
    comp: markRaw(B),
  },
  {
    name: '我是C组件',
    comp: markRaw(C),
  },
]);

const current = reactive<Comp>({
  comp: tabs[0].comp,
});

const switchTab = (item: ITab) => {
  current.comp = item.comp;
};


</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  overflow: auto;
  padding: 16px;
  &-item {
    padding: 20px;
    border: 1px solid #ccc;
    // background-color: aquamarine;
    margin-bottom: 10px;
  }
}
.tab {
  display: flex;
  &-item {
    padding: 5px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
    &:hover {
      cursor: pointer;
    }
    // &:active {
    //   border: 1px solid #ggg;
    // }
  }
}
</style>