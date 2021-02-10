import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TitlesIndex from '../views/TitlesIndex.vue';
import VueInputAutowidth from 'vue-input-autowidth';

Vue.use(VueInputAutowidth);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/titles/index',
    name: 'titles-index',
    component: TitlesIndex
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
