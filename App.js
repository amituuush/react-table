import React, { Component } from 'react';
import axios from 'axios';

import Repo from './Repo';
import './styles.css';

class App extends Component {
  // TODO: need props and super?
  constructor(props) {
    super(props);

    this.state = { repos: [] };
  }

  componentDidMount() {
    // TODO: move to config
    axios.get('https://api.github.com/orgs/HelloFax/repos')
      .then((res) => this.setState({ repos: res.data }))
      .catch((err) => { console.log(err); });
  }


  render() {
    const repos = this.state.repos.map((repo, i) => {
      return <Repo
        data={repo}
        key={i}
      />;
    });

    return (
      <div className="app-container">
        <h1>HelloFax Repositories</h1>
        <table>
          <thead>
            <tr>
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

