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
    'path': '/404',
    'alias': '*',
    'name': 'notFound',
    'component': () => import(/* webpackChunkName: 'NotFound' */ '../views/NotFound.vue')
  }
];

const router = new VueRouter({
  'mode': 'history',
  'linkExactActiveClass': 'vue-school-active-class',
  'scrollBehavior': function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      const position = {}
      if (to['hash']) {
        position['selector'] = to['hash']
        return false
      }
    }
  },
  routes,
});

export default router;
