import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store.js'

Vue.use(VueRouter);

const routes = [
  {
    'path': '/',
    'name': 'home',
    'component': Home,
    'props': true
  },
  {
    'path': '/destination/:slug',
    'name': 'DestinationDetails',
    'props': true,
    'component': () => import(/* webpackChunkName: 'DestinationDetails' */ '../views/DestinationDetails.vue'),
    'children': [
      {
        'path': ':experienceSlug',
        'name': 'experienceDetails',
        'props': true,
        'component': () => import(/* webpackChunkName: 'ExperienceDetails' */ '../views/ExperienceDetails.vue')
      }
    ],
    'beforeEnter': function(to, from, next) {
      const exists = store['destinations'].find(
        destination => destination['slug'] === to['params']['slug']
      )
      if (exists) {
        next()
      }
      else {
        next({'name': 'notFound'})
      }
    }
  },
  {
    'path': '*',
    'name': 'notFound',
    'component': () => import(/* webpackChunkName: 'NotFound' */ '../views/NotFound.vue')
  }
];

const router = new VueRouter({
  'mode': 'history',
  'linkExactActiveClass': 'vue-school-active-class',
  routes,
});

export default router;
