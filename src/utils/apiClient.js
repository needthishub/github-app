import axios from 'axios';

export default {
  searchRepos: (keyword) => axios.get(`https://api.github.com/search/repositories?q=${keyword}`)
    .then((result) => result.data.items)
    .catch(() => []),
};
