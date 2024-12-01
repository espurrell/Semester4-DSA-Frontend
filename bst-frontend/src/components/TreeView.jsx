import React from 'react';
import NavBar from './NavBar';

const TreeView = ({ tree }) => {
  return (
    <div>
      <h2>Binary Search Tree</h2>
      <NavBar />
      <pre>{JSON.stringify(tree, null, 2)}</pre>
    </div>
  );
};

export default TreeView;