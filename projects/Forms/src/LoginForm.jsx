import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'nirmalkilari' && password === 'knk123') {
      console.log('Login successful');
      setLoginError('');
      setIsLoggedIn(true); 
    } else {
      console.log('Login failed');
      setLoginError('Invalid username or password');
      setIsLoggedIn(false); 
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <p>Username:</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>Password:</p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <button type="submit">Login</button>
      </form>

      
      {isLoggedIn && <p style={{ color: 'green' }}>Login successful!</p>}
    </div>
  );
}

export default LoginForm;
