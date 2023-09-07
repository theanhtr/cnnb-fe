import { createRouter, createWebHistory } from "vue-router";
import MISAPageNotFound from "../components/layout/MISAPageNotFound.vue";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: MISAPageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
