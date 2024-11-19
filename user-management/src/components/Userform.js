// src/components/UserForm.js
import React, { useState ,useEffect} from 'react';

import './userform.css'

const UserForm = ({addUser,l,changeAddbtn,data}) => {

  var t=l+1;
 if(data){
  t=data.id
 }
  



  const [formData, setFormData] = useState({
    id:'',
    name: '',
    email: '',
    website: '',
    phone: '',
  });

//set data in formData useing useeffect
useEffect(() => {
  if (data) {
    setFormData(data);
    }
    }, [data]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

// add the id value as t
const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, website, phone } = formData;
  addUser({ id: t, name, email, website, phone });
  setFormData({
    id: '',
    name: '',
    email: '',
    website: '',
    phone: '',
    });
    changeAddbtn();
  
    };




  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
      <h2>User Form</h2>
      
      <input
      placeholder='Enter Name'
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

     
      <input
      placeholder='Enter Email'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      
      <input
      placeholder='Enter Website Url'
        type="text"
        id="website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        required
      />

      
      <input
      placeholder='Enter Phone Number'
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
      <button onClick={changeAddbtn}>Back</button>
     
    </form>
    </div>
  );
};

export default UserForm;
