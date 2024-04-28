import React, { useState } from 'react';
import axios from 'axios'; // or use the AWS SDK for JavaScript
import './EmailForm.css';

const EmailForm = () => {
  const [file, setFile] = useState(null);
  const [customMessage, setCustomMessage] = useState('');

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCustomMessageChange = (event) => {
    setCustomMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send the file and custom message
    const formData = new FormData();
    formData.append('file', file);
    formData.append('customMessage', customMessage);

    try {
      // Send the file and custom message to the back-end API
      await axios.post('/api/send-emails', formData);
      alert('Email sending task enqueued successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error enqueuing email sending task.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileUpload} />
      <textarea value={customMessage} onChange={handleCustomMessageChange} placeholder="Enter custom message" />
      <button type="submit">Send Emails</button>
    </form>
  );
};

export default EmailForm;