<template>
  <div>
    <Loading v-if="jobsLoading" />
    <div id="job-items" v-if="!jobsLoading">
      <JobItem
        v-for="jobsListItem in jobsList"
        v-bind:key="jobsListItem.id"
        v-bind:data="jobsListItem"
      />
    </div>
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
