<template>
  <div id="app">
    <div id="nav">
      <a class="navbar-brand" href="/"> <h1><i class="fa fa-gamepad" aria-hidden="true"></i> Card Game</h1></a>
      <router-link to="/">Start</router-link> 
      <router-link to="/home">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/man">Man</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style lang="stylus">
  
  body
    padding 0
    margin 0

  a
    color white
    text-decoration none
  a:hover
    color white

  #nav
    background #22a1c7
    display flex

  #app
    margin: 0
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

  .navbar-brand
    padding 10px
    margin 0
  
    

  .navbar-brand h1
    margin 0

</style>


