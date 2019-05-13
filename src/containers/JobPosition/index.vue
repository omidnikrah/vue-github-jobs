<template>
    <div>
        <Loading v-if="jobPositionLoading" />
    </div>
</template>

<script>
    import Loading from '../../components/Loading';
    import { mapGetters } from 'vuex';
    export default {
        name: 'JobPosition',
        components: {
            Loading,
        },
        mounted() {
            this.$store.dispatch('getJobPosition', this.$route.params.positionId);
        },
        computed: {
            ...mapGetters({
                jobPositionLoading: 'jobPositionLoading',
                jobPosition: 'jobPosition',
            }),
        },
    };
</script>
