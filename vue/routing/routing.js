// 1. Define route components.
// These can be imported from other files
import { createRouter, createWebHistory } from 'vue-router';
// 2. Define some routes
import routes from './routes';

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's

const router = createRouter({

  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
