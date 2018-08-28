import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Result from './views/Result.vue';
import Index from './views/Index.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    }
  ],
});
