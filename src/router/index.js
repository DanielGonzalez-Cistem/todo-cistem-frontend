import { createRouter, createWebHistory } from 'vue-router';

import { setTitlePage } from './guards';

const PATH_NAME = 'TODO Cistem';

const router = createRouter({
  history: createWebHistory(),
  
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/modules/login/LoginView.vue'),
      meta: { title: `${ PATH_NAME } | Login` },
    }
  ]
});

setTitlePage( router );

export default router;
