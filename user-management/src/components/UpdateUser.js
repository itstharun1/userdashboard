// src/components/UserForm.js
import React, { useState,useEffect} from 'react';
import './userform.css'

const UpdateUser = ({newData}) => {


 
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    email: '',
    website: '',
    phone: '',
  });

// take that newData and update in formData
useEffect(() => {
  setFormData(newData);
  }, [newData]);
console.log(formData);



  

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };


const handleSubmit = (e) => {
  e.preventDefault();
  
    };


  return (
   <div className='update-card'>
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

     
    </form>
   </div>
  );
};

export default UpdateUser;
