export default {
    GET_JOBS: (state, data) => {
        state.jobs = data;
        /* eslint-disable-next-line */
        console.log(state, data);
    }
};