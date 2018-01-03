<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/count">Count</router-link>
      <router-link to="/count1">Count1</router-link>
      <router-link to="/count2">Count2</router-link>
      <router-link to="/count3">Count3</router-link>
      <router-link to="/countparam">countparam</router-link>
      <router-link to="/CountGetter">CountGetter</router-link>
      <router-link to="/CountAction">CountAction</router-link>
    </div>
    <router-view/>
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
</style>
