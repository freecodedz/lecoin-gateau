import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isConnected: false,
    userProfile: null

  },
  mutations: {
    updateConnectionState: (state) =>{
      state.isConnected = false;
    },
    setUserProfile:(state, val)=> {
      state.userProfile = val;
    }
  },
  actions:{
    login:(context, payload)=> {

      var user = fb.usersCollection.where('email', '==', payload.email).
      where('password', '==', payload.password).
      get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          console.log(doc.id, "=>", doc.data());
          context.commit('setUserProfile', doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

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
  }
})

export default store
