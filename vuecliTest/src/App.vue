<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/Hi">Hi</router-link>
     <!-- =====================Hi页面下的两个子页面=====================-->
      <router-link :to="{name:'Hi1',params:{username:'cqian'}}">Hi页面1</router-link>
      <router-link to="/Hi/Hi2">Hi页面2</router-link>
      <!-- =====================Hi页面下的两个子页面=====================-->
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
