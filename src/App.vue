<template>
  <div id="app">
    <header>
      <nav class="[ head-nav ] [ navbar navbar-default navbar-expand-lg ]">
        <a class="[ navbar-brand ]" href="#">
          <router-link to="/"> 
            <h1><font-awesome-icon icon="gamepad" aria-hidden="true" /> Card Game</h1>
          </router-link>
        </a>
        <button v-if="isLoggedInn" v-on:click="openCloseMenu" ref="navCollapseBtn" class="[ head-nav__toggle-btn ] [ navbar-toggler ]" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
          <font-awesome-icon class="[ head-nav__toggle-btn__bars ]" icon="bars" aria-hidden="true" />
        </button>

        <div v-if="isLoggedInn" id="collapse-menu" class="[ head-nav__links ] [ navbar-collapse ]" v-bind:class="{ collapse: isCollapsed }" >
          <div class="[ head-nav__links__container ] [d-flex justify-content-end]">
            <ul class="[ head-nav__links__list-container ] [ nav navbar-nav ]">
              <li class="[ head-nav__links__item ] [ nav-item nav-link active ]"><a href="#"><router-link to="/home">Home</router-link></a></li>
              <li  class="[ head-nav__links__item ] [ nav-item nav-link ]"><a href="#"><router-link to="/about">About</router-link></a></li>
              <li  class="[ head-nav__links__item ] [ nav-item nav-link ]"><a href="#"><router-link to="/contact">Contact</router-link></a></li>
            </ul>  
          </div>
        </div><!-- /.navbar-collapse -->
      </nav>
    </header>

  
  <router-view/>
  </div>
</template>


<script>
export default {
  data(){
    return {
      isCollapsed: true,
      isLoggedInn: false,
      cards: []
    }
  },
  methods:{
    openCloseMenu: function() {
      this.isCollapsed = !this.isCollapsed
      this.$refs.navCollapseBtn.classList.toggle('head-nav__toggle-btn--active')
    }
  },
  created() {
      let cardsApi = fetch("https://api.magicthegathering.io/v1/cards")

      cardsApi
      .then(unparsedCards => unparsedCards.json())
      .then( jsonCards => {
          // console.log(jsonCards.cards)
          this.cards = jsonCards.cards
      })
  },
}
</script>


<style lang="stylus">
  @import 'assets/style.css';
  
  .navbar-header__collapsed_btn
    height 45px
    background-color: #3a99cd
    color #ffffff
    border none
    position absolute
    right 0px
    top 0px
    font-size 20px
    min-width 50px
   

  a
    color white!important
    text-decoration none!important
  a:hover
    color black

  .head-nav

    &__links
      justify-items end

      &__container
        width 100%

      &__item
        font-size 1.2em


    &__toggle-btn
      border 2px solid white!important
      width 50px!important
      height 40px!important
      transition all 0.1s

      &--active
        transform rotate(-90deg)
        transform all 0.1s
        width 45px!important
        height 55px!important

      &__bars
        color white
        transform scale(1.5, 1.2)
        font-weight light

      
      
      

</style>



