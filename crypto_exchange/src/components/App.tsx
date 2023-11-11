import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
  );
}

export default App;
