import router from '../router/index';
import {userService} from '../services'

const user = JSON.parse(localStorage.getItem('user'));

const state = user ? {userProfile:user, loggedIn: true} : {userprofile: null, loggedIn: false};

const mutations = {
  setConnectionState: (state, val) =>{
    state.loggedIn = val;
  },
  setUserProfile:(state, val)=> {
    state.userProfile = val;
  }
};

const actions = {
  login:(context, payload)=> {
    const userCollection = userService.login(payload);
      if(userCollection){
        commit('setUserProfile', doc.data());
        commit('setConnectionState', true);
        if (router.currentRoute.path === '/login') {
          router.push('/');
        }
      }else {
        commit('setUserProfile', null);
        commit('setConnectionState', false);
      }
    })

  },

  signup({state, commit},user){

    fb.usersCollection.doc().set({
      name: user.name,
      title: user.title,
      email: user.email,
      password: user.password
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }

};

export const account = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};
