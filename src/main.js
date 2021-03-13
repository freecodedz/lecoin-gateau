require('./assets/main.scss');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)

 // Initialize Firebase
 Vue.config.productionTip = false

 let app
 new Vue({
   store: store,
   router:router,
   el: '#app',
   render: h => h(App)
 })
// auth.onAuthStateChanged(user => {
  // if (!app) {
    // app = new Vue({
      // router,
       //store,
  //     render: h => h(App)
    // }).$mount('#app')
   //}

//if (user) {
//     store.dispatch('fetchUserProfile', user)
//   }
// })
