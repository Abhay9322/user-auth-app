import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login',formData);
            localStorage.setItem('token',res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response.data.message);
        }
    };
  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <input name='email' placeholder='email' onChange={handleChange} /><br />
        <input type="password" name='password' placeholder='Password' onChange={handleChange} /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
