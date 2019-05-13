<template>
  <div id="app">
    <Header />
    <main id="main-wrapper">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components: {
    Header,
  },
};
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
#main-wrapper {
  max-width: 768px;
  margin: 0 auto;
}
</style>
