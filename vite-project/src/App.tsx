import Feed from './Feed';
import Login from './Login';
import CreateAccount from './Create-Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;