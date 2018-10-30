<template>
  <div id="headingComponent">
    <div class="alert alert-info" role="alert">
  <h1 class="text-center">{{title}}</h1>
</div>
  </div>
</template>

<script>
  export default {
  name: 'Heading',
  data() {
  return {
    title:'Yu-Gi-Oh! Deck Browser'
  }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
