import React  from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import EmailForm from './EmailForm';

import './App.css';


function App() {
  

  return (
    <div className='Head'>
      <h1>Lambda Mailer</h1>

      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <EmailForm />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
