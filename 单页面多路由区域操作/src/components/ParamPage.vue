<template>
  <div >
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.newsId }}</h1>
    <h1>{{ $route.params.newsTitle }}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'params'
      }
    }
  }
</script>

