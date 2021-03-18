<template>
  <div class="home-content columns">
    <div class="text column">
      <h2>Ton gâteau près de <span>chez toi</span> </h2>
      <div class="desc">
        <p>Vous organisez un anniversaire, un mariage ou n'importe quel évenement et vous avez besoin d'un beau et bon gâteau,
          C'est ici cherchez, commander et vous serez servit ........ </p>
          <ul>
            <li>Rendre plus attractive(négociation)</li>
            <li>Système de notage par les utilisateurs</li>
          </ul>
      </div>
    </div>
    <div class="column">
      <div class="d-flex justify-content-center">
        <div class="img">
          <img src="../assets/images/cake1.png" alt="">
        </div>
      </div>
    </div>
    <div class="column ">
     <app-cake-search></app-cake-search>
    </div>
</div>
</template>
<script>
import CakeSearch from '../components/CakeSearch';

export default {
  components: {
    'app-cake-search': CakeSearch
  },
  data () {
    return {

    }

  }
}
</script>

<style lang="scss" scoped>
@import '~bulma';
.home-content {
   background: linear-gradient(90deg, #2b2e43 50%, #2b2e43 50%,
   #ffffff 50.1%, #ffffff 100%);
   height: 100%;
 }
.text {
   margin-top: 100px;
   padding-left: 2rem;
   h2 {
       color: $primary;
       font-size: 3rem;
   }
   p {
       line-height: 1.6;
       color: #AAB2BD;
   }
}

.desc {
   border-left: 3px solid #FC6E51;
   margin-top: 100px;
   padding-left: 1rem;
}
.img {

   box-shadow: 0 0 1.2rem rgba(0,0,0,.9);
   border-radius: 50%;
   margin-top: 70px;
   background-color: white;
   width:370px;
   height: 370px;
   text-align: center !important;
   display: flex;
   justify-content: center;
   align-items: center;
   img {
       width:330px;
       height: 330px;
       border-radius: 50%;
   }
}

.form-element {
   padding: 5px 0px 25px 2px;
   width: 100%;
 }
</style>
