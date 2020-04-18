import React from 'react';

const Nav = (props) => {
  const { className } = props;
  return (
    <header>
      <span>Sieun's Gold Fish</span>
      <nav>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
        </ul>
      </nav>
      <label htmlFor="searchBar">Search: </label>
      <input type="text" name="searchBar" placeholder="search" />
    </header>
    // button
  );
};

export default Nav;
