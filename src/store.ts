import Vue from 'vue';
import Vuex, { StoreOptions, ActionTree } from 'vuex';

Vue.use(Vuex);

interface IBaseStore{
  score: number;
}

const mutations ={
  selectOption: (state: IBaseStore, selectScore: number) =>{
    state.score = state.score + selectScore;
  }
}

const actions: ActionTree<IBaseStore, IBaseStore> = {
  selectAction: ({commit}: any, selectScore: number) => {
    commit('selectOption', selectScore);
  }
}

const store: StoreOptions<IBaseStore> ={
  state: {
    score: 0,
  },
  mutations,
  actions,
}

export default new Vuex.Store(store);