import React from 'react'
import logo from '../images/logo.png'
import './userform.css'

function UserAddbtn() {
  return (
    <div className='logo-card-user'>
      <img className='logo-add-btn' alt='logo-add-btn' src={logo} />
      <button className='add-btn'>Add User</button>
    </div>
  )
}

export default UserAddbtn
