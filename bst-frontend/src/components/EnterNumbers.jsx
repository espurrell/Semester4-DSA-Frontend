// src/components/EnterNumbers.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import NavBar from './NavBar';

const EnterNumbers = ({ setTree }) => {
  const [numbers, setNumbers] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('numbers', numbers);

      const response = await axiosInstance.post('/process-numbers', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      setTree(response.data);
      navigate('/tree-view');
    } catch (error) {
      console.error('Error processing numbers:', error);
    }
  };

  return (
    <div>
      <h2>Enter Numbers</h2>
      <NavBar />
      <p>Enter a series of numbers (separate each by commas).</p>
      <input
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter your numbers here"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EnterNumbers;