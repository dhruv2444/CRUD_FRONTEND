import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import View from './components/View';
import Delete from './components/Delete';
import Update from './components/Update';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(prev => !prev); // toggle to re-trigger useEffect
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fce3ec, #f9f9f9)',
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2rem',
        background: 'linear-gradient(to right, #ff758c, #7873f5)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>
        User Registration System
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
      <Register onRegister={triggerRefresh} />
        <Update onRegister={triggerRefresh}/>
        <Delete onRegister={triggerRefresh}/>
      </div>

      <div style={{ marginTop: '40px' }}>
      <View refresh={refresh} />
      </div>
    </div>
  );
};

export default App;
