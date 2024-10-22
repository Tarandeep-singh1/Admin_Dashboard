// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <div className="card">Welcome to the Admin Dashboard!</div>;
      case 'users':
        return <div className="card">Manage Users Here</div>;
      case 'reports':
        return <div className="card">View Reports Here</div>;
      case 'settings':
        return <div className="card">Manage Settings Here</div>;
      default:
        return <div className="card">Welcome to the Admin Dashboard!</div>;
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <button onClick={() => setActiveSection('home')}>Home</button>
        <button onClick={() => setActiveSection('users')}>Users</button>
        <button onClick={() => setActiveSection('reports')}>Reports</button>
        <button onClick={() => setActiveSection('settings')}>Settings</button>
      </div>
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
