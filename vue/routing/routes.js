const routes = [

  {
    path: '/',
    component: () => import('../layout/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('../pages/admin/VueFormAdmin.vue'), name: 'vueEditForm' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404')
  }
];

export default routes;
