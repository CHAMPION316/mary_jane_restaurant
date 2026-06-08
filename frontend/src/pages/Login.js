import React from 'react';
import LoginBackground from '../assets/images/wine-login.jpg';

const Login = () => {
  return (
    <div 
    style={{
      backgroundImage: `url(${LoginBackground})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%',
    }}>

      <div className="container mt-5">
        <h1>Login</h1>
        <p>Sign in to manage your bookings.</p>
      </div>
    </div>
  );
};  

export default Login;