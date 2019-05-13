<template>
  <div>
    <Loading v-if="jobsLoading" />
    <div v-bind:key="jobsListItem.id" v-for="jobsListItem in jobsList">
      <JobItem v-bind:data="jobsListItem" />
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
  created() {
    this.$store.dispatch('getJobs');
  },
  computed: {
    ...mapGetters({
      jobsLoading: 'jobsLoading',
      jobsList: 'jobsList',
    }),
  },
};
</script>
