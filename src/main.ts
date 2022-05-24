import { createApp } from 'vue'
import App from './App.vue'
import Card from '@components/Card/index.vue';
import Tree from '@components/Tree/index.vue';

createApp(App)
  .component('Card', Card)
  .component('Tree', Tree)
  .mount('#app');
