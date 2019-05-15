<template>
  <div>
    <Loading v-if="jobsLoading" />
    <transition appear name="list">
      <div id="job-items" v-if="!jobsLoading">
          <JobItem
            v-for="jobsListItem in jobsList"
            :key="jobsListItem.id"
            :data="jobsListItem"
          />
      </div>
    </transition>
  </div>
</template>

<script>
import JobItem from '../../components/JobItem';
import Loading from '../../components/Loading';
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {
    JobItem,
    Loading,
  },
  mounted() {
    if (this.jobsList.length === 0) {
      this.$store.dispatch('getJobs');
    }
  },
  computed: {
    ...mapGetters({
      jobsLoading: 'jobsLoading',
      jobsList: 'jobsList',
    }),
  },
};
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
