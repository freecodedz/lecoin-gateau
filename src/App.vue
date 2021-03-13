<template>
  <div id="app">
    <site-nav></site-nav>

    <router-view></router-view>
  </div>
</template>

<script>
import SiteNav from './components/SiteNav'
export default {
  components:{
    'site-nav':SiteNav
  }

}
</script>

<style lang="scss">

</style>
