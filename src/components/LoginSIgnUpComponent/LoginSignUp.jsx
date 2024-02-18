import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setAction(""); // Hide other forms when showing forgot password
  };

  const handleFormSwitch = (formType) => {
    setAction(formType);
    setShowForgotPassword(false); // Hide forgot password when switching forms
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setAction("Login");
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">
          {showForgotPassword ? "Forgot Password" : action}
        </div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {showForgotPassword ? (
          <>
            <div className='input'>
              <img src={email_icon} alt=""/>
              <input type="email" placeholder='Enter your Email'/>
            </div>
            <div className='submit-container'>
              <div className="submit" onClick={() => {/* Handle send password reset email logic here */}}>
                Send
              </div>
              <div className="submit gray" onClick={handleBackToLogin}>
                Back
              </div>
            </div>
          </>
        ) : (
          <>
            {action === "Login" ? null : (
              <div className='input'>
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Name" />
              </div>
            )}
            <div className='input'>
              <img src={email_icon} alt=""/>
              <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
              <img src={password_icon} alt=""/>
              <input type="password" placeholder='Password'/>
            </div>
            {action === "Sign Up" ? null : (
              <div className='forgot-password' onClick={handleForgotPasswordClick}>
                Lost Password? <span>Click Here</span>
              </div>
            )}
          </>
        )}
      </div>

      {!showForgotPassword && (
        <div className='submit-container'>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => handleFormSwitch("Sign Up")}>
            SignUp
          </div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => handleFormSwitch("Login")}>
            LogIn
          </div>
        </div>
      )}
    </div>
  );
};
