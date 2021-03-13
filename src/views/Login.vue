<template>
  <div id="login-signup">
    <div id="login" v-if="isRegistred">
      <div class="columns is-centered">
        <div class="column is-one-third ">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input v-model="loginForm.email" class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <p class="control has-icons-left">
              <input v-model="loginForm.password" class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="lock" />
              </span>
            </p>
          </diV>
        </div>
      </div>
      <div class="field">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <button class="button is-success" v-on:click.prevent="login">
              Login
            </button>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-one-third ">
          <a class="is-size-7" v-on:click="switchForm"><strong>
            Vous n'êtes pas encore sur Lecoingateau? Inscrivez-vous
          </strong></a>
        </div>
      </div>
    </div>
    <div id="signup" v-if="!isRegistred">
      <div class="columns is-centered">
        <div class="column is-one-third ">
          <form  @submit="checkSignupForm">
           <p v-if="signupFormErrors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in signupFormErrors">{{ error }}</li>
              </ul>
           </p>
           <div class="field">
             <label class="label" for="name">Name</label>
             <input v-model.trim="signupForm.name" class="control input" type="text" placeholder="Savvy Apps" id="name" />
           </div>
           <div class="field">
             <label class="label" for="title">Title</label>
             <input  v-model.trim="signupForm.title"class="control input" type="text" placeholder="Company" id="title" />
           </div>
           <div class="field">
             <label class="label" for="email2">Email</label>
             <div class="control has-icons-left has-icons-right">
                <div class="control">
                  <input v-model.trim="signupForm.email" class="input is-danger" type="email" placeholder="you@email.com" >
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              <p class="help is-danger">This email is invalid</p>
            </div>
           </div>
           <div class="field">
             <label class="label" for="password">Password</label>
             <input  v-model.trim="signupForm.password1"class="control input" type="password" placeholder="min 6 characters" id="password" />
           </div>
           <div class="field">
             <label class="label" for="password2">Confirm password</label>
             <input  v-model.trim="signupForm.password2"class="control input" type="password" placeholder="min 6 characters" id="password2" />
           </div>
           <button v-on:click.prevent="signup()" class="button is-success">Sign Up</button>
           <div class="extras">
             <a v-on:click="switchForm">Back to Log In</a>
           </div>
         </form>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data: function(){
    return {
      isRegistred: true,
      signupForm:{
        name:'',
        title: '',
        email: '',
        password1: '',
        password2: ''
      },
      loginForm: {
        email:'',
        password:''
      },
      signupFormErrors:[]
    }
  },

  methods:{
    switchForm: function(){
      this.isRegistred = !this.isRegistred;
    },
    login: function(){
      this.$store.dispatch('login',this.loginForm)
    },
    signup: function(){
      this.checkSignupForm();
      this.$store.dispatch('signup',{
        name: this.signupForm.name,
        title: this.signupForm.title,
        email: this.signupForm.email,
        password: this.signupForm.password1
      })
    },

    checkSignupForm: function(e){

      if (this.signupForm.name && this.signupForm.title && this.signupForm.email
        && this.signupForm.password1 && this.signupForm.password2 &&
        this.signupForm.password1 === this.signupForm.password2) {
        return true;
      }


      this.signupFormErrors = [];

      if (!this.signupForm.name) {
        this.signupFormErrors.push('Name required.');
      }
      if (!this.signupForm.title) {
        this.signupFormErrors.push('title is required.');
      }

      if (!this.signupForm.email) {
        this.signupFormErrors.push('email is required.');
      }else if (!this.validEmail(this.email)){
        this.signupFormErrors.push('valid email required');
      }

      if (!this.signupForm.password1 || !this.signupForm.password2  ) {
        this.signupFormErrors.push('Passwords are required');
      } else if (this.signupForm.password1 !== this.signupForm.password2){
        this.signupFormErrors.push( "The passwords must be the same.");
      }
    },
    validEmail: function (email) {
     var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return regex.test(email);
   },
    changeConnectionState: function(){
      this.$store.commit('changeConnectionState');
    }
  },
  computed: {
    isConnected(){
      return store.state.isConnected;
    }
  }

}
</script>

<style lang="scss">

</style>
