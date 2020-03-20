import React, { Component } from 'react';
import withGithubService from '../hoc/with-github-service';
import Spinner from '../spinner/spinner';
import Search from '../search/search';
import Alert from '../alert/alert';
import UserList from '../user-list/user-list';

class Home extends Component {
  state = {
    data: [],
    count: 0,
    loading: false,
    error: false,
    errorMessage: '',
    showAlert: false
  };

  onSubmit = (e, query) => {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    this.setState({ loading: true });
    if (query.trim()) {
      this.props
        .getData(query.trim())
        .then(data => this.putData(data))
        .catch(err => this.putError(err));
    } else {
      this.putEmpty();
    }
  };

  putData = data => {
    return this.setState({
      loading: false,
      data: data.users,
      count: data.count,
      error: false,
      showAlert: false
    });
  };

  putError = err => {
    return this.setState({
      loading: false,
      error: true,
      errorMessage: 'Something went wrong',
      showAlert: true
    });
  };

  putEmpty = () => {
    return this.setState({
      loading: false,
      error: false,
      errorMessage: 'Input username and press Enter for start search',
      showAlert: true
    });
  };

  render() {
    const {
      data,
      query,
      loading,
      error,
      errorMessage,
      showAlert,
      count
    } = this.state;

    const counter = count ? <p>Найдено: {count}</p> : null;
    const spinner = loading && !error ? <Spinner /> : null;
    const renderData = !(loading && error) ? <UserList users={data} /> : null;

    return (
      <div>
        <Search onSubmit={this.onSubmit} query={query} />
        {counter}
        <Alert
          show={showAlert}
          hide={!showAlert}
          type="error"
          message={errorMessage}
        />
        {spinner}
        {renderData}
      </div>
    );
  }
}

const mapGitMethodToProps = githubService => ({
  getData: githubService.getSearchUsers
});

export default withGithubService(mapGitMethodToProps)(Home);
