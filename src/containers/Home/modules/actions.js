import { GET_JOBS, GET_JOBS_SUCCESS } from './constants';
import Request from '../../../utils/xhr-wrapper';

export default {
  getJobs: (store, data) => {
    let parameters = '';
    if (data !== undefined) {
      parameters = `description=${data.description}&location=${data.location}`;
    } else {
      parameters = `description=&location=`;
    }
    store.commit(GET_JOBS);
    Request({
      url: `positions.json?${parameters}`,
    })
      .then(({ data }) => {
        store.commit(GET_JOBS_SUCCESS, data);
      })
      .catch(error => {
        /* eslint-disable-next-line */
        console.log(error);
      });
  },
};
