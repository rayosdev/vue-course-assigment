<template>
  <div id="app">
    <header>
      <!-- <div id="nav">
        <a class="navbar-brand" href="/"> <h1><i class="fa fa-gamepad" aria-hidden="true"></i> Card Game</h1></a>
        <router-link to="/">Start</router-link> 
        <router-link to="/home">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/man">Man</router-link>
      </div> -->


          <!-- DB7364DDC2 -->
          <!-- NextGenTel_122FD3 -->



      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>



      <nav class="[ navbar navbar-default navbar-expand-lg ]">
                <a class="navbar-brand" href="">
                  <router-link to="/"> 
                    <h1><font-awesome-icon icon="gamepad" aria-hidden="true" /> Card Game</h1>
                  </router-link>
                </a>
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button v-on:click="openCloseMenu" type="button"  class="[ navbar-header__collapsed_btn ] [ navbar-toggle collapsed ]" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>


              <!-- Collect the nav links, forms, and other content for toggling -->
              <div id="collapse-menu" class="[ navbar-collapse ]" v-bind:class="{ collapse: isCollapsed }" >
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="#">
                      <router-link to="/home">Home</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                        <router-link to="/about">About</router-link>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <router-link to="/contact">Contact</router-link>
                    </a>
                  </li>
                </ul>  
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
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
    openCloseMenu: function() {
      this.isCollapsed = !this.isCollapsed
    }
  }
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
    background-color: white;
    height: 100%
  }
  

</style>



