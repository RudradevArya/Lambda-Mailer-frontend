import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import EmailForm from './EmailForm';

function App() {
  return (
    <div>
      <h1>Lambda Mailer</h1>
      <EmailForm />

      <GoogleOAuthProvider clientId="647829566826-qtt6u1lf2de94l3a5k4lgpmuo2b2go3b.apps.googleusercontent.com">
        <EmailForm />
      </GoogleOAuthProvider>
    </div>
  );
}
export default App;