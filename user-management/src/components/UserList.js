import React from 'react'

import './UserList.css'
import UserForm from './Userform';
import { useState,useEffect} from 'react';
import UserAddbtn from './UserAddbtn';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios'


function UserList() {

  const [displayAdd,setDisplayAdd]=useState(false)
  const [users, setUsers] = useState([])
  const [newData,setNewData]=useState()


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
    const userExist=users.find(user=>user.id===val.id)
    if(userExist){
      setUsers(users.map(user=>user.id===val.id?val:user))
      }
      else{
        setUsers([...users,val])
        }
      setNewData(null)

    
   }

   const deleteUser=(id)=>{
    setUsers(users.filter(user=>user.id!==id))
    }


    




  let l=users.length;






    
   
  const changeAddbtn=(val)=>{
    setDisplayAdd(!displayAdd)
    const user =  users.find((user) => user.id === val);
    if(user){
      setNewData(user)
    }
    


   } 


 

   




  return (
    <div className='user-main-card'>
      <div className='user-add-card2'>
      {
        displayAdd ? (
          <div onClick={changeAddbtn}>
            <UserAddbtn/>
          </div>
        ):(
          <div>
            <UserForm changeAddbtn={changeAddbtn} l={l} addUser={addUser}/>
          </div>          
        )
      }
            
    </div>
      <div className='main-card'>
      {
        users.map((user,index)=>{
          return (
            <div className='user-card' key={index}>
              <div className='logo-css'>
                <img className='logo' src={logo} alt={user.name} />
              </div>
              <h3>Id : {user.id}</h3>
              <h3>Name : {user.name}</h3>
              <h3>Email : {user.email}</h3>
              <h3>Website : {user.website}</h3>
              <h3>Phone : {user.phone}</h3>
              <div className='buttons-card'>
             
                <button onClick={() => changeAddbtn(user.id)} className='btn'>Edit</button>
       
                <button onClick={()=>(deleteUser(user.id))} className='btn'>Delete</button>
              </div>
            </div>
              )
            })
      }
    </div>
    <div className='user-add-card'>
      {
        displayAdd ? (
          <div onClick={changeAddbtn}>
            <UserAddbtn/>
          </div>
        ):(
          <div>
            <UserForm data={newData} changeAddbtn={changeAddbtn}  l={l} addUser={addUser} />
          </div>          
        )
      }


            
    </div>

    
    </div>
  )
}

export default UserList
