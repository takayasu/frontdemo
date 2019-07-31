import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peopledata: [],
  },
  mutations: {
    addPeople(state,payload){
      console.log('Mutaion:addPeople:Call',payload);
      payload.forEach((item) => {
        state.peopledata.push(item);
      });
    }
  },
  actions: {
    add({commit},payload){
      console.log('Action:Add:Call');
      commit('addPeople',payload);
    }
  },
});
