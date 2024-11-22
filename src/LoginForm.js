import React from 'react'
import './LoginForm.css'

function LoginForm() {
  return (
    <div className='main-container'>
        <form className='form-container' onSubmit={(e)=> e.preventDefault()} >
            <h1>Login</h1>
            <p>Welcome back! Please login to taste it!!</p>
            <div className='input-container'>
                <label htmlFor='username'>User Name</label>
                <input type='text' placeholder='username@gmail.com'
                    id='username'
                />
                <label htmlFor='password'>Password</label>
                <input type='password'
                 placeholder='Enter your password'
                 id='password'
                 />
                <button className='btn' type='submit'>Login</button>
            </div>
            <span>Haven't an account?</span> <span><button className='signup-btn'>Sign-in</button></span>
        </form>
    </div>
  )
}

export default LoginForm