<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Roboto');
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: 'Roboto', cursive;
    outline: 0;
  }
</style>
