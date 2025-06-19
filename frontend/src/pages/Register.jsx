import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register',formData);
            alert(res.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' onChange={handleChange} /><br />
        <input name='email' placeholder='Email' onChange={handleChange} /><br />
        <input type='password' name='password' placeholder='Password' onChange={handleChange} /><br />
        <button type='submit'>Register</button>

      </form>
    </div>
  )
}

export default Register;
