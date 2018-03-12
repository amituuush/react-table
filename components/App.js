import React, { Component } from 'react';
import axios from 'axios';

import Repo from './Repo';
import Modal from './Modal';
import '../styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      currentlyViewedRepo: undefined
    };

    this.tableHeaders = ["Name", "Last Updated", "Primary Language", "Watchers", "Forks", "Issues", "Repo Link"];

    this.setCurrentlyViewedRepo = this.setCurrentlyViewedRepo.bind(this);
    this.clearCurrentlyViewedRepo = this.clearCurrentlyViewedRepo.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.github.com/orgs/HelloFax/repos')
      .then((res) => this.setState({ repos: res.data }))
      .catch((err) => { console.log(err); });
  }

  setCurrentlyViewedRepo(data) {
    this.setState({ currentlyViewedRepo: data });
  }

  clearCurrentlyViewedRepo() {
    this.setState({ currentlyViewedRepo: undefined });
  }

  render() {
    const repos = this.state.repos.map((repo, i) => {
      return <Repo
        data={repo}
        setCurrentlyViewedRepo={this.setCurrentlyViewedRepo}
        key={i}
      />;
    });

    const tableHeaders = this.tableHeaders.map((name, i) => {
      return <th key={i}>{name}</th>;
    });

    return (
      <div className="app-container">
        {this.state.currentlyViewedRepo ?
          <Modal
            data={this.state.currentlyViewedRepo}
            clearCurrentlyViewedRepo={this.clearCurrentlyViewedRepo}
          /> : ''}
        <h1>HelloFax Repositories</h1>
        <table>
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>
            {repos}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

