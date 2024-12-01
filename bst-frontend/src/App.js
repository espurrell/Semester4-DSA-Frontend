import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EnterNumbers from './components/EnterNumbers';
import TreeView from './components/TreeView';
import PreviousTrees from './components/PreviousTrees';
import useFetchData from './hooks/useFetchData';

function App() {
  const [tree, setTree] = useState(null);
  const { data: previousTrees, loading, error } = useFetchData('/previous-trees');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/enter-numbers" element={<EnterNumbers setTree={setTree} />} />
          <Route path="/tree-view" element={<TreeView tree={tree} />} />
          <Route path="/previous-trees" element={<PreviousTrees trees={previousTrees} />} />
        </Routes>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </Router>
  );
}

export default App;