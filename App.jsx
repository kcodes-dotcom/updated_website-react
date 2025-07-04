import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Updates from './components/Updates';
import Graph from './components/Graph';
import Map from './components/Map';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <Updates />
        <Graph />
        <Map />
      </main>
    </div>
  );
}

export default App;
