import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    state: {
        jobPositionLoading: false,
        jobPosition: {},
    },
    actions,
    mutations,
    getters,
};
