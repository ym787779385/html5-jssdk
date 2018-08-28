import Vue from 'vue';
import Vuex, { StoreOptions, ActionTree } from 'vuex';

Vue.use(Vuex);

interface IBaseStore{
  score: number;
  name: string;
  userinfo: Array<string>
}

const mutations ={
  selectOption: (state: IBaseStore, selectScore: number) => {
    state.score = state.score + selectScore;
  },
  inputName: (state: IBaseStore, name: string) => {
    state.name = name;
  },
  getUserInfo: (state:IBaseStore, url: string) => {
    var info = url.slice(url.indexOf('?')+1,url.length-2);
    var userInfoItem = info.split('&');
    userInfoItem.forEach( (item) => {
      var s = item.split('=');
      state.userinfo.push(s[1]);
    })
  }
}

const actions: ActionTree<IBaseStore, IBaseStore> = {
  selectAction: ({commit}: any, selectScore: number) => {
    commit('selectOption', selectScore);
  },
  nameAction: ({commit}: any, name: string) => {
    commit('inputName', name);
  },
  userInfoAction: ({commit}: any, url: string) => {
    commit('getUserInfo', url);
  }
}

const store: StoreOptions<IBaseStore> ={
  state: {
    score: 0,
    name: '',
    userinfo: [],
  },
  mutations,
  actions,
}

export default new Vuex.Store(store);