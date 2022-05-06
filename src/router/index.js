import { createRouter, createWebHistory } from 'vue-router'
import ShipmentsComponent from "../Shipments/pages/shipments.component.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../Home.component.vue")
    },
    {
      path: '/shipments/client',
      name: 'Client shipments',
      component: () => import("../Shipments/pages/shipments.component.vue"),
      props: { enableListDialogs: false }
    },
    {
      path: '/shipments/enterprise',
      name: 'Enterprise shipments',
      component: () => import("../Shipments/pages/shipments.component.vue"),
      props: { enableListDialogs: true }
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
