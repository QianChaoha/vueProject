<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/Hi">Hi</router-link>
      <router-link to="/params/21/haha">ParamPage</router-link>
      <router-link to="/goback/">goback</router-link>
      <router-link to="/gobackparams/21/news">gobackparams</router-link>
    </div>
    <transition name="animation" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .animation-enter {
    opacity: 0;
  }

  .animation-leave {
    opacity: 1;
  }

  .animation-enter-active {
    transition: opacity .5s;
  }

  .animation-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
