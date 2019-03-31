<template>
  <div id="app">
    <header>
      <nav class="[ head-nav ] [ navbar navbar-default navbar-expand-lg ]">
        <a class="[ navbar-brand ]" href="#">
          <router-link to="/"> 
            <h1><font-awesome-icon icon="gamepad" aria-hidden="true" /> Card Game</h1>
          </router-link>
        </a>
        <button v-on:click="openCloseMenu" class="[ head-nav__toggle-btn ] [ navbar-toggler ]" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
          <font-awesome-icon class="[ head-nav__toggle-btn__bars ]" icon="bars" aria-hidden="true" />
        </button>

        <div id="collapse-menu" class="[ head-nav__links ] [ navbar-collapse ]" v-bind:class="{ collapse: isCollapsed }" >
          <div class="[ head-nav__links__container ] [d-flex justify-content-end]">
            <ul class="[ head-nav__links__list-container ] [ nav navbar-nav ]">
              <li class="[ nav-item nav-link active ]"><a href="#"><router-link to="/home">Home</router-link></a></li>
              <li><a class="[ nav-item nav-link ]" href="#"><router-link to="/about">About</router-link></a></li>
              <li><a class="[ nav-item nav-link ]" href="#"><router-link to="/contact">Contact</router-link></a></li>
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
    return ({
      isCollapsed: true
    })
  },
  methods:{
    openCloseMenu: function(e) {
      this.isCollapsed = !this.isCollapsed
      e.target.classList.toggle('head-nav__toggle-btn--active')
    }
  },
  created() {
  },
}
</script>


<style lang="stylus">
  @import 'assets/style.css';
  
  .navbar-header__collapsed_btn{
    height: 45px;
    background-color: #3a99cd;
    color: #ffffff;
    border: none;
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 20px
    min-width 50px
    border solid 4px red

  }
  html{
    height: 100%
  }

  body{
    background-color: white
    height: 100%
  }

  a
    color white!important
    text-decoration none!important
  a:hover
    color black

  .head-nav
    &__links
      justify-items end
      align-items end

      &__container
        width 100%
      // &__list-container

    &__toggle-btn
      border 2px solid white!important
      width 50px!important
      height 40px!important
      transition all 0.2s

      &--active
        // transform rotate(-90deg)
        transform all 0.2s
        width 40px!important
        height 50px!important

      &__bars
        color white
        // transform scale(1.5, 1.2)
        font-weight light

      // &__inner-line
        // background red!important
        // height 5px!important
      
      &__inner-line:before
        content ""
        position relative
        top -20px
        height 5px
        width 40px!important
      

</style>



