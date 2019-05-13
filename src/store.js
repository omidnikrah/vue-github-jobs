import Vue from 'vue';
import Vuex from 'vuex';
import HomeModule from './containers/Home/modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HomeModule,
  },
});
