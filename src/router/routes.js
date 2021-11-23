
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: 'demo', component: () => import('pages/demo.vue') },

       { path: 'demo1', component: () => import('pages/demo1.vue') },
   
    ]
  },




  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  // {
  //   path: '/demo',
  //   component: () => import('pages/demo.vue')
  // },
  // {
  //   path: '/demo1',
  //   component: () => import('pages/demo1.vue')
  // }
]

export default routes
