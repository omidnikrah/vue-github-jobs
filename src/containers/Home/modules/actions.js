import { GET_JOBS, GET_JOBS_SUCCESS } from './constants';
import Request from '../../../utils/xhr-wrapper';

export default {
  getJobs: store => {
    store.commit(GET_JOBS);
    Request({
      url: 'positions.json?description=&location=',
    })
      .then(({ data }) => {
        store.commit(GET_JOBS_SUCCESS, data);
      })
      .catch(error => {
        console.log(error);
      });
    /* eslint-disable-next-line */
    console.log('Get Jobs');
  },
};
