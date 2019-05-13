import { GET_JOB_POSITION, GET_JOB_POSITION_SUCCESS } from './constants';

export default {
    [GET_JOB_POSITION]: state => {
        state.jobPositionLoading = true;
    },
    [GET_JOB_POSITION_SUCCESS]: (state, data) => {
        state.jobPositionLoading = false;
        state.jobPosition = data;
    },
};
