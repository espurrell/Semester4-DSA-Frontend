import React from 'react';
import NavBar from './NavBar';

const PreviousTrees = ({ trees }) => {
  return (
    <div style={styles.container}>
      <h2>Previous Trees</h2>
      <NavBar />
      {trees && trees.length > 0 ? (
        trees.map((tree, index) => (
          <div key={index} style={styles.treeCard}>
            <h3>Tree {index + 1}</h3>
            <p><strong>Numbers(Output):</strong> {tree.numbers}</p>
            <pre style={styles.pre}>{JSON.stringify(tree.rootNode, null, 2)}</pre>
          </div>
        ))
      ) : (
        <p>Sorry, no previous trees available.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  treeCard: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  pre: {
    backgroundColor: '#e8e8e8',
    padding: '10px',
    borderRadius: '4px',
    overflowX: 'auto',
  },
};