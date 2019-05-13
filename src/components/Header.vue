<template>
  <header id="header">
    <h1 id="title">Github Jobs</h1>
    <form id="search-form">
      <input name="title" type="text" v-model="jobTitle" placeholder="Job title..." />
      <input name="title" type="text" v-model="location" placeholder="Location..." />
    </form>
  </header>
</template>

<script>
  import debounce from '../utils/debounce';
  export default {
    name: 'Header',
    data() {
      return {
        jobTitle: '',
        location: '',
      };
    },
    watch: {
      jobTitle: debounce(function () {
        if (this.$route !== 'Home') {
          this.$router.push('/');
        }
        this.$store.dispatch('getJobs', {
          description: this.jobTitle,
          location: this.location,
        });
      }, 250),
      location: debounce(function () {
        if (this.$route !== 'Home') {
          this.$router.push('/');
        }
        this.$store.dispatch('getJobs', {
          description: this.jobTitle,
          location: this.location,
        });
      }, 250)
    },
  }
</script>

<style scoped>
#header {
  background-color: #f9f9f9;
  text-align: center;
  padding: 50px;
}
#title {
  text-align: center;
  font-size: 50px;
  margin: 0;
  color: #333;
  font-family: 'Baloo Bhai', cursive;
}
#search-form input {
  padding: 15px;
  -webkit-appearance: none;
  border: 0;
  margin: 5px;
  min-width: 15%;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  font-size: 13px;
}
</style>
