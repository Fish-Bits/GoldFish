import React from 'react';

const LoginForm = () => { 
  return (
    <div>
      Login
      <input type='text'></input>
      <input type='text'></input>
      <button>Log In</button>
      <a className="google-btn" href="/auth/google"> Google+</a>
    </div>
  );
};

export default LoginForm;
