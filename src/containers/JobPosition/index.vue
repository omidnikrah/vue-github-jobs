<template>
  <div>
    <Loading v-if="jobPositionLoading" />
    <div v-if="!jobPositionLoading" id="position-container">
      <img
        class="company_logo"
        v-if="jobPosition.company_logo"
        :src="`${jobPosition.company_logo}`"
        :alt="`${jobPosition.title}`"
      />
      <h1 class="job-title">{{ jobPosition.title }}</h1>
      <div class="job-detail">
        <span class="key-value">
          <span>Company: </span>
          <span v-if="jobPosition.company_url">
            <a :href="`${jobPosition.company_url}`">{{
              jobPosition.company
            }}</a>
          </span>
          <span v-if="!jobPosition.company_url">
            {{ jobPosition.company }}
          </span>
        </span>
        <span class="key-value">
          <span>Location: </span>
          <span>{{ jobPosition.location }}</span>
        </span>
        <span>{{ moment(jobPosition.created_at).fromNow() }}</span>
      </div>
      <p class="description" v-html="jobPosition.description">
        {{ jobPosition.description }}
      </p>
      <a
        class="apply-button"
        v-if="jobPosition.how_to_apply"
        :href="
          jobPosition.how_to_apply.includes('@')
            ? `mailto:${
                extractEmails(jobPosition.how_to_apply)[0]
              }?Subject=CV for ${jobPosition.title}`
            : getUrls(jobPosition.how_to_apply)[0]
        "
        >Apply Now</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getUrls from 'get-urls-to-array';
import Loading from '../../components/Loading';
import extractEmails from '../../utils/extractEmails';
export default {
  name: 'JobPosition',
  components: {
    Loading,
  },
  mounted() {
    this.$store.dispatch('getJobPosition', this.$route.params.positionId);
  },
  methods: {
    extractEmails,
    getUrls,
  },
  computed: {
    ...mapGetters({
      jobPositionLoading: 'jobPositionLoading',
      jobPosition: 'jobPosition',
    }),
  },
};
</script>

<style scoped>
#position-container {
  margin: 30px auto;
  padding: 30px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.job-title {
  font-size: 25px;
  font-weight: bold;
}
.company_logo {
  width: 200px;
  margin: 70px auto 100px;
  display: block;
}
.job-detail {
  margin: 20px 0;
}
.key-value {
  margin-right: 15px;
}
.key-value span:first-child {
  opacity: 0.6;
}
.description {
  line-height: 1.7;
  color: #444;
}
.description ul {
  list-style: circle;
}
.apply-button {
  background-color: #ff6464;
  padding: 10px 15px;
  display: inline-block;
  margin-top: 30px;
  border-radius: 3px;
  color: #fff;
}
</style>
