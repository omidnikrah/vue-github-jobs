import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    state: {
        jobsLoading: false,
        jobsList: []
    },
    actions,
    mutations,
    getters
};