import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //it successfully created new user with email and password .
      console.log(auth);
      if (auth) {
        history.push('/')
      }
    })
    .catch(error => alert(error.message))

    //firebase registration
  }

  return (
    <div className='login'>
        <Link to='/'>
        <img
        className='login__logo'  
        src='https://th.bing.com/th/id/R.217d03013c51c76db7cf0e9b50154d4b?rik=%2bIHXwrO3Il%2biZw&riu=http%3a%2f%2flogo-logos.com%2fwp-content%2fuploads%2f2016%2f12%2fAmazon_logo.png&ehk=7l4%2bkNvbCTrXLwiCGyH6iX7O5JHdUjlF%2fKRCjwG2o2o%3d&risl=&pid=ImgRaw&r=0'/>
        </Link>

        <div className='login__container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' 
                value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' 
                value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

            <button onClick={register} 
            className='login__registrationButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login
