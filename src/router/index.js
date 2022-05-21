import { createRouter, createWebHistory } from "vue-router";
import CustomerQuotation from "../customers/pages/customer-quotation.component.vue";

const routes = [
  {
    path: "/",
    redirect: "/quotations",
  },
  {
    path: "/shipments/client",
    name: "Client shipments",
    component: () => import("../Shipments/pages/shipments.component.vue"),
    props: { enableListDialogs: false },
  },
  {
    path: "/shipments/enterprise",
    name: "Enterprise shipments",
    component: () => import("../Shipments/pages/shipments.component.vue"),
    props: { enableListDialogs: true },
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    component: () => import("../Vehicles/pages/vehicles.component.vue"),
    props: { enableListDialogs: true },
  },
  {
    path: "/quotations",
    name: "customer-quotation",
    component: CustomerQuotation,
    children: [
      {
        path: "/quotations",
        component: () =>
          import(
            "../customers/pages/steps-quotation/quotation-shipment.step.vue"
          ),
      },
      {
        path: "business-shipping",
        component: () =>
          import(
            "../customers/pages/steps-quotation/enterprise-shipping.step.vue"
          ),
      },
      {
        path: "pick-up-detail",
        component: () =>
          import("../customers/pages/steps-quotation/pick-up-detail.step.vue"),
      },
      {
        path: "destination-detail",
        component: () =>
          import(
            "../customers/pages/steps-quotation/destination-detail.step.vue"
          ),
      },
      {
        path: "payment",
        component: () =>
          import(
            "../customers/pages/steps-quotation/payment-shipment.step.vue"
          ),
      },
    ],
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../shared/sign-up/sign-up.component.vue")
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../shared/sign-in/sign-in.component.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

export default router;
