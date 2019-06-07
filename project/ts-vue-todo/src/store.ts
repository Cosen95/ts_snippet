import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        text: '学习<typescript全面解读>',
        complete: false,
      },
      {
        text: '学习<webpack4进阶>',
        complete: false,
      },
    ],
  },
  mutations: {
    updateList(state, { index, content}) {
      state.list[index].text = content;
    },
    updateListStatus(state, index) {
      state.list[index].complete = true;
    }
  },
  actions: {

  },
});
