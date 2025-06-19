import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Dashboard() {
    const [message, setMessage] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
            const res = await axios.get('/auth/dashboard');
            setMessage(res.data.message);
        } catch (error) {
            setMessage('Unauthorized. Please log in again.');
        }
      }

      fetchData();
    }, [])
    
  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  )
}

export default Dashboard;
