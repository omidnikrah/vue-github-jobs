import { GET_JOBS, GET_JOBS_SUCCESS } from './constants';

export default {
  [GET_JOBS]: state => {
    state.jobsLoading = true;
  },
  [GET_JOBS_SUCCESS]: (state, data) => {
    state.jobsLoading = false;
    state.jobsList = data;
  },
};
