import Vue from 'vue';
import Vuex from 'vuex';
import HomeModule from './containers/Home/modules';
import JobPositionModule from './containers/JobPosition/modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HomeModule,
    JobPositionModule,
  },
});
