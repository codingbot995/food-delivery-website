import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowLogin}) => {
    const[currentState, setcurrentState] = useState("login")
  return (
    <div className='login-popup'>
       <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setshowLogin(false)}src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-inputs">
            {currentState==='login'?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState === 'sign up'? 'create account':'login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="login"?<p>Create a new account? <span onClick={()=>setcurrentState('sign up')}>Click here</span></p>
        :<p>Already have an account?<span  onClick={()=>setcurrentState('login')}>Login here</span></p>
        }
       </form>
    </div>
  )
}

export default LoginPopup