<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Heading/>
          </div>
        </div>
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Cards/>
        </div>
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <Card/>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
  import Heading from './components/Heading'
  import Cards from './components/Cards'
  import Card from './components/Card'

  export default {
  name: 'App',
  components: {
  Cards,
  Card,
  Heading
  }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  #app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  }

</style>
