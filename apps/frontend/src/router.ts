import { createRouter, createWebHistory } from 'vue-router';

import DogView from './app/views/dog/Dog.vue';
import OwnerView from './app/views/owner/Owner.vue';

const routes = [
  { path: '/dog', name: 'dog', component: DogView },
  { path: '/owner', name: 'owner', component: OwnerView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
