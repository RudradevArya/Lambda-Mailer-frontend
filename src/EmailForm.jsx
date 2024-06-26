import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import './EmailForm.css'; // Import the CSS file

const EmailForm = () => {
  const [file, setFile] = useState(null);
  const [customMessage, setCustomMessage] = useState("");
  const [customSubject, setCustomSubject] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/api/google-login';
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCustomMessageChange = (event) => {
    setCustomMessage(event.target.value);
  //   axios.get('http://localhost:3001/api/google-login', {
  //   withCredentials: true,
  // });
  };

  const handleCustomSubjectChange = (event) => {
    setCustomSubject(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send the file and custom message
    const formData = new FormData();
    formData.append("file", file);
    formData.append("customMessage", customMessage);
    // formData.append('emailTemplate', emailTemplate);
    formData.append('customSubject', customSubject);

    try {
      // Send the file and custom message to the back-end API
      await axios.post("http://localhost:3001/api/send-emails", formData, {
        withCredentials: true,
      });
      alert("Email sending task enqueued successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error enqueuing email sending task.");
    }
  };

  return (
    
    <div className="email-form-container">
      <h2>Send Bulk Emails</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <label htmlFor="file-upload">
            <span className="file-upload-icon">&#x1F4CE;</span>
            <span className="file-upload-text">Upload CSV File</span>
          </label>
            
          <input
           type="file" 
           id="file-upload" 
           onChange={handleFileUpload}
           className="file-upload-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="custom-subject">Custom Subject:</label>
            <input
              type="text"
              id="custom-subject"
              value={customSubject}
              onChange={handleCustomSubjectChange}
              placeholder="Enter custom subject. Use {{column_name}} for column placeholders."
              className="custom-sub"
          />
        </div>
        <div className="form-group">
          <label htmlFor="custom-message">Custom Message:</label>
          <textarea
            id="custom-message"
            value={customMessage}
            onChange={handleCustomMessageChange}
            placeholder="Enter custom message, Use {{column_name}} for column placeholders."
            // placeholder="Custom Message"
            className="custom-mess custom-textarea"
          ></textarea>
        </div>
        <button type="submit" className="send-button">
          Send Emails
        </button>
      </form>
      {/* <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}
      <button onClick={handleGoogleLogin} className="google-button">Login with Google</button>
    </div>
    
  );
};

export default EmailForm;