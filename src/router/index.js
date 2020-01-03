import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shopping from "../views/Shopping.vue";
import Order from "../views/Order.vue";
import My from "../views/My.vue";
import hotsale from "../views/Hotsale.vue";
import exchange from "../views/Exchange.vue";
import setting from "../views/Setting.vue";
import wallet from "../views/Wallet.vue";

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
  },
  {
    path: "/Shopping/Hotsale",
    name: "hotsale",
    component: hotsale
  },
  {
    path: "/Shopping/Exchange",
    name: "exchange",
    component: exchange
  },
  {
    path: "/My/Setting",
    name: "setting",
    component: setting
  },
  {
    path: "/My/Wallet",
    name: "wallet",
    component: wallet
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
});

export default router;
