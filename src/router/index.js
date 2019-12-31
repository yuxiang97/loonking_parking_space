import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shopping from "../views/Shopping.vue";
import Order from "../views/Order.vue";
import My from "../views/My.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/About.vue")
  // }
  {
    path: "/Shopping",
    name: "shopping",
    component: Shopping
  },
  {
    path: "/Order",
    name: "order",
    component: Order
  },
  {
    path: "/My",
    name: "my",
    component: My
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
