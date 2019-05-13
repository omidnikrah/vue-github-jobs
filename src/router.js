import Vue from 'vue';
import Router from 'vue-router';
import Home from './containers/Home';
import JobPosition from './containers/JobPosition';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/position/:positionId',
      name: 'JobPosition',
      component: JobPosition,
    },
  ],
});
