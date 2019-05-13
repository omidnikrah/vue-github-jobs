import { GET_JOB_POSITION, GET_JOB_POSITION_SUCCESS } from './constants';
import Request from '../../../utils/xhr-wrapper';

export default {
  getJobPosition: (store, id) => {
    store.commit(GET_JOB_POSITION);
    Request({
      url: `positions/${id}.json`,
    })
      .then(({ data }) => {
        store.commit(GET_JOB_POSITION_SUCCESS, data);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
