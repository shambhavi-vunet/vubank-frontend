import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './images/logo.png';
import BankImg from './images/bankImg.png'
import logoImg from './images/logo-img.png'



function Login() {
  return (
    <div className='login-pg'>
      <div className='login-logo'>
        <img src={logo} />
      </div>
      <div className='login-content'>
        <img src={BankImg} />
        <div>
          <div className='login-welcome'>Hi, Welcome!</div>
          <div className='login-message'>Log In to Your vuBank Account</div>
          <div className='login-box'>
            <div className='login-title'>Log In</div>
            <span className='login-username'>Username or email</span>
            <input type='text' className='text-input'/>
            <span className='login-username'>Password</span>
            <input type='password' className='text-input'/>
            <button className='login-submit-btn'>Log in</button>
            <div>
                <img src={logoImg}/>
                <span className='login-credits'>Powered by vunet systems - 2023. all rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;