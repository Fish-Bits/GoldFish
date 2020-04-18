import React from 'react';

const Nav = (props) => {
  const { className } = props;
  return (
    <nav>
      <div className="navlinks">
        <div className="logo">
          <h1>Sieun's Gold Fish</h1>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Posts</a>
        </div>
      </div>
      </nav>
  );
};

export default Nav;
