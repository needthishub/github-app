import React, {useState} from 'react';
import {Container} from './styledComponents';

import apiClient from '../utils/apiClient';

import ShowAlert from '../components/ShowAlert/ShowAlert';
import InputSubmit from '../components/InputSubmit/InputSubmit';
import Loader from '../components/Loader/Loader';
import ClearButton from '../components/ClearButton/ClearButton';
import CardList from '../components/CardList/CardList';

function Search() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  async function searchRepos(keyword) {
    setRepos([]);
    setLoading(true);
    setShowAlert(false);
    const result = await apiClient.searchRepos(keyword);
    setRepos(result);
    setLoading(false);
    setShowAlert(!result.length);
  }

  function clearRepos() {
    setRepos([]);
  }

  return (
    <Container>
      <ShowAlert showAlert={showAlert} />
      <InputSubmit
        placeholder="Enter Repository Name"
        buttonText="Search!"
        onSubmit={(value) => searchRepos(value)}
      />
      {loading && <Loader />}
      <ClearButton clear={clearRepos} items={repos} />
      <CardList items={repos} />
    </Container>
  );
}

export default Search;
