import { userService } from '../services';
import { router } from '../helpers';

const state = {
    type: null,
    message: null
};

const actions = {
  success(){

  },
  error(){

  },
  clear(){

  }
};

const mutations = {
  success(){

  },
  error(){

  },
  clear(){

  }
};

export const alert = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};
