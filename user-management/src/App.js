import React from 'react'
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import './App.css'

function App() {
  
  return (
    <div className='card'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userupdate" element={<UpdateUser />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
