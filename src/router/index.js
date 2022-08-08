import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import(/* webpackChunkName: "main-view" */ "@/views/Main")
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: 'order-view' */ "@/views/Order")
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import(/* webpackChunkName: 'thank-you-view' */ "@/views/ThankYou")
  },
  {
    path: "/:slug",
    name: "Product",
    component: () => import(/* webpackChunkName: "product-view" */ "@/views/Product")
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: 'not-found-view' */ "@/views/NotFound")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: '404-view' */'@/views/NotFound')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
