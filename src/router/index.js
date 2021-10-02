import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    'path': '/details/:slug',
    'name': 'DestinationDetails',
    'component': () => import(/* webpackChunkName: 'DestinationDetails' */ '../views/DestinationDetails.vue')
  }
];

const router = new VueRouter({
  'mode': 'history',
  'linkExactActiveClass': 'vue-school-active-class',
  routes,
});

export default router;
