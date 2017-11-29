<template>
  <div>
    <h2>{{msg}}....{{$route.params.username}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'hi1',
    data () {
      return {
        msg: 'hi1 page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
