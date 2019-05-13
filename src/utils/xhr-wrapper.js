import axios from 'axios';

export default ({ url, method = 'GET', data = {} }) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  let API_URL = '';
  if (process.env.NODE_ENV === 'development') {
    API_URL = `/${url}`;
  } else {
    API_URL = `https://jobs.github.com/${url}`;
  }

  const handleErrors = error => {
    switch (error.response.status) {
      case 500:
        /* eslint-disable-next-line */
        console.log('500 Error');
        break;
      case 400:
        /* eslint-disable-next-line */
        console.log('400 Error');
        break;
      default:
        break;
    }
    return false;
  };

  axios.interceptors.response.use(
    response => {
      return response;
    },
    function(error) {
      handleErrors(error);
      return Promise.reject(error);
    },
  );

  return axios({
    url: API_URL,
    method,
    headers,
    [method === 'POST' ? 'data' : 'params']: data,
  });
};
