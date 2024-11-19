import React from 'react'
import UpdateUser from './UpdateUser';
import './UserList.css'
import UserForm from './Userform';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import UserAddbtn from './UserAddbtn';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';



function UserList() {
  const [users, setUsers] = useState([])
  const [displayAdd,setDisplayAdd]=useState(false)
  



  let l=users.length;


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



    
   
   const changeAddbtn=(val)=>{
    setDisplayAdd(!displayAdd)
    const user =  users.find((user) => user.id === val);
    

   } 


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
                <Link to='/userupdate' >
                <button onClick={() => changeAddbtn(user.id)} className='btn'>Edit</button>
                </Link>
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
            <UserForm  changeAddbtn={changeAddbtn}  l={l} addUser={addUser} />
          </div>          
        )
      }


            
    </div>
    <div className='updateusercard'>
    <UpdateUser />
    </div>
    
    </div>
  )
}

export default UserList
