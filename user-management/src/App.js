import React from 'react'
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [newData,setNewData]=useState({
    id:"",
    name:"",
    email:"",
    websit:"",
    phone:"",
  });

  const getData = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setUsers(response.data)
      })
      .catch(error => {
        console.error(error);
        });
  }
  useEffect(() => { 
    getData()
   }, [])

   const addUser=(val)=>{
    // add user to api
    const response=axios.post('https://jsonplaceholder.typicode.com/users', {val})
    .then(response => {
      console.log(response.data)
      setUsers([...users,response.data.val])
      })
      .catch(error => {
        console.error(error);
        });
    
 
   }

   const deleteUser=(id)=>{
    setUsers(users.filter(user=>user.id!==id))
    }


    const dataUpdate=(valu)=>{
      setNewData(
        {
          id:valu.id,
          name:valu.name,
          email:valu.email,
          websit:valu.websit,
          phone:valu.phone,
          }
      )
      
    }

  
  return (
    <div className='card'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList users={users} addUser={addUser} deleteUser={deleteUser} dataUpdate={dataUpdate} />} />
        <Route path="/userupdate" element={<UpdateUser newData={newData} />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
