import React from 'react';
import moment from 'moment';

//   - Name (include description in line below name in lighter print)
//  - Last Updated
//  - Primary language
//  - Number of Watchers
//  - Number of Forks
//  - Number of Issues
//  - Link to GitHub repo page (to be opened in new tab)


const Repo = ({ data, setCurrentlyViewedRepo }) => {
  const { name, description, id, updated_at, language, watchers_count, forks_count, open_issues_count, html_url } = data;
  // could you create a constructor with all these as fields and then pass in data to instantiate a new object and use that?
  return (
    <tr onClick={() => setCurrentlyViewedRepo(data)}>
      <td id="repo-name-col">
        {name}
        <p id="repo-description">{description}</p>
      </td>
      <td>{updated_at}</td>
      <td>{language}</td>
      <td>{watchers_count}</td>
      <td>{forks_count}</td>
      <td>{open_issues_count}</td>
      <td><a href={html_url} target="_blank">Repo</a></td>

      {/* TODO: add in number of issues*/}
    </tr>
  );
};

export default Repo;