import React from 'react';

//   - Name (include description in line below name in lighter print)
//  - Last Updated
//  - Primary language
//  - Number of Watchers
//  - Number of Forks
//  - Number of Issues
//  - Link to GitHub repo page (to be opened in new tab)


const Repo = ({ data }) => {
  const { name, updated_at, language, watchers_count, forks_count, html_url } = data;

  return (
    <tr>
      <td>{name}</td>
      <td>{updated_at}</td>
      <td>{language}</td>
      <td>{watchers_count}</td>
      <td>{forks_count}</td>
      <td>Placeholder</td>
      <td><a href={html_url}>Link to repo</a></td>

      {/* TODO: add in number of issues*/}
    </tr>
  );
};

export default Repo;