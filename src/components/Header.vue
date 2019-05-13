<template>
  <header id="header" :class="{scrolled: minimizeHeader}">
    <div class="header-wrapper">
      <h1 id="title">Github Jobs</h1>
      <form id="search-form">
        <input name="title" type="text" v-model="jobTitle" placeholder="Job title..." />
        <input name="title" type="text" v-model="location" placeholder="Location..." />
      </form>
    </div>
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
        minimizeHeader: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', () => {
        if (Math.round(window.scrollY) > 100) {
          this.minimizeHeader = true;
        } else {
          this.minimizeHeader = false;
        }
      });
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
      }, 250),
    },
  }
</script>

<style scoped>
#header {
  background-color: #394452;
  text-align: center;
  transition: all .5s ease;
  padding: 50px;
}
#header.scrolled {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 10px 20px;
}
.header-wrapper {
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column;
}
#header.scrolled .header-wrapper {
  max-width: 768px;
  margin: 0 auto;
  height: 55px;
}
#title {
  text-align: center;
  font-size: 50px;
  margin: 0;
  color: #333;
  font-family: 'Baloo Bhai', cursive;
  color: white;
  transition: all 1s ease;
}
#header.scrolled #title {
  position: absolute;
  left: 0;
  font-size: 35px;
}
#search-form {
  transition: float 5s ease;
}
#header.scrolled #search-form{
  position: absolute;
  right: 0;
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
