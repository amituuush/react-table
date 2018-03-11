import React, { Component } from 'react';
import axios from 'axios';

import Repo from './Repo';
import Modal from './Modal';
import './styles.scss';

{/*
TODO:
  - Name (include description in line below name in lighter print)
  - Number of Issues
  - language icon?
  - center table and header
  - look into responsive tables
  -
*/}

class App extends Component {
  // TODO: need props and super?
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      currentlyViewedRepo: undefined
    };

    this.setCurrentlyViewedRepo = this.setCurrentlyViewedRepo.bind(this);
    this.clearCurrentlyViewedRepo = this.clearCurrentlyViewedRepo.bind(this);
  }

  componentDidMount() {
    // TODO: move to config
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
            <tr>
              {/* map through col names? */}
              <th>Name</th>
              <th>Last Updated</th>
              <th>Primary Language</th>
              <th>Watchers</th>
              <th>Forks</th>
              <th>Issues</th>
              <th>Repo Link</th>
            </tr>
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

