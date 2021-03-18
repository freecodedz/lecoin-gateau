<template>
  <div id="search-form">
        <form>
           <div class="field">
             <label  class="label">Gâteau</label>
             <div class="control">
                <div class="select">
                  <select>
                    <option value="wc">Wedding Cake</option>
                    <option value="bc">Birthday Cake</option>
                    <option value="cc">Cup Cake</option>
                    <option value="o">Oriental</option>
                  </select>
                </div>
             </div>
           </div>

           <div class="field">
              <label class="label">Ville</label>
              <div class="control">
                <input  placeholder = "Ville"  value='city'>
              </div>
           </div>

           <div class="field">
              <label class="field">Choisir une date</label>
              <div class="control">
                <input  type="date">
              </div>
           </div>
           <div class="field">
               <button class="button is-success"  id="search-button">
                 chercher ton Traiteur
               </button>
           </div>
        </form>

  </div>
</template>
<style lang="scss">
</style>
