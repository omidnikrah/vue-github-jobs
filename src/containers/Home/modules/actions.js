import Request from '../../../utils/xhr-wrapper';

export default {
    getJobs: () => {
        Request({
           url: "positions.json?description=&location=",
        });
        /* eslint-disable-next-line */
        console.log('Get Jobs');
    }
};