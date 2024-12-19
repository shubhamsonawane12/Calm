import React, { useEffect } from 'react';
import '../Css/Login.css';

function Login() {
  useEffect(() => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');

    const handleLoginClick = (event) => {
      event.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';

      setTimeout(() => {
        signupForm.style.opacity = 0;
        loginForm.style.opacity = 1;
      }, 10);
    };

    const handleSignupClick = (event) => {
      event.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';

      setTimeout(() => {
        loginForm.style.opacity = 0;
        signupForm.style.opacity = 1;
      }, 10);
    };

    if (loginForm && signupForm && loginLink && signupLink) {
      loginLink.addEventListener('click', handleLoginClick);
      signupLink.addEventListener('click', handleSignupClick);

      return () => {
        loginLink.removeEventListener('click', handleLoginClick);
        signupLink.removeEventListener('click', handleSignupClick);
      };
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <>
      <div className='login_Page'>
        <div className="container">
           <div class="form-container" id="login-form">
      <h1>Login</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <a href="#" id="signup-link">Sign up</a></p>
    </div>

    <div class="form-container" id="signup-form" style={{ display: 'none' }}>
      <h1>Sign Up</h1>
      <form>
      
        <label for="new-username">Username</label>
        <input type="text" id="new-username" name="new-username" required />
        <label for="new-email">Email</label>
        <input type="email" id="new-email" name="new-email" required />
        <label for="new-password">Password</label>
        <input type="password" id="new-password" name="new-password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" id="login-link">Login</a></p>
    </div>
        </div>
      </div>
    </>
  );
}

export default Login;
