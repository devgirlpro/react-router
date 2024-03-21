import React from 'react';

const Layout = (props) => {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>Users</li>
      </ul>

      {props.children}
    </>
  );
};

export default Layout;
