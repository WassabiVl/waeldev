const routes = [

  {
    path: '/',
    component: () => import(/* webpackChunkName: "group-main" */'../layout/MainLayout.vue'),
    children: [
      { path: '/', component: () => import(/* webpackChunkName: "group-admin" */'../pages/admin/VueFormAdmin.vue'), name: 'vueEditForm' }
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
