<template>
  <header>
    <section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </router-link>
            <a role="button" class="navbar-burger" aria-label="menu"
                        aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Dashboard</router-link>
            <router-link class="navbar-item" to="/settings">Settings</router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a v-if="userProfile == undefined" class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <router-link v-if="userProfile == undefined" class="button is-light" to="/login">
                  Log in
                </router-link>
                <router-link v-if="userProfile != undefined" class="button is-primary is-rounded" to="/profile">
                  <strong>{{nameInitial}}</strong>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </section>
  </header>
</template>

<script>
export default {

  computed: {
    userProfile(){
      return this.$store.state.userProfile;
    },
    nameInitial() {
      if(this.userProfile && this.userProfile.name){
      return this.$store.state.userProfile.name.charAt(0).toUpperCase();
    }
    return null;
    }
  }


}
</script>
