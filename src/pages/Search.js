import React, {Component} from 'react';
import {Container, Alert, Button} from './styledComponents';

import apiClient from '../utils/apiClient';
import InputSubmit from '../components/inputSubmit/InputSubmit';
import CardList from '../components/cardList/CardList';
import Loader from '../components/loader/Loader';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      loading: false,
      showAlert: false,
    };
  }

  async searchRepos(keyword) {
    this.setState({repos: [], loading: true, showAlert: false});
    const repos = await apiClient.searchRepos(keyword);
    this.setState({repos, loading: false, showAlert: !repos.length});
  }

  renderShowAlert(showAlert) {
    return (
      showAlert && (
        <Alert className="alert alert-danger" role="alert">
          <i className="fas fa-exclamation-circle" />
              &nbsp;Please enter the name of your repository.
        </Alert>
      )
    );
  }

  renderClearButton(repos) {
    return (
      repos.length > 0 && (
      <Button
        type="button"
        className="btn btn-danger"
        onClick={() => { this.setState({repos: []}); }}
      >
        Clear All
      </Button>
      )
    );
  }

  render() {
    const {repos, loading, showAlert} = this.state;
    return (
      <Container>
        {this.renderShowAlert(showAlert)}
        <InputSubmit
          placeholder="Enter Repository Name"
          buttonText="Search!"
          onSubmit={(value) => this.searchRepos(value)}
        />
        {loading && <Loader />}
        {this.renderClearButton(repos)}
        <CardList items={repos} />
      </Container>
    );
  }
}

export default Search;
