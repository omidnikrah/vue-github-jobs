<template>
    <div>
        <button type="button" @click="handleClick">Click Me</button>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
    </div>
</template>

<script>
    import JobItem from '../../components/JobItem';
    import { mapGetters } from 'vuex';
    export default {
        name: 'Home',
        components: {
            JobItem
        },
        methods: {
            handleClick() {
              this.$store.dispatch("getJobs");
            },
        },
        computed: {
            ...mapGetters({
                jobsList: 'jobsList',
            })
        }
    }
</script>