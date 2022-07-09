import React from 'react';
import './signin.css';

function SignIn(){
    return (
        <div>
            <h1 className='title'>Sign In</h1>
            <form action='' className='signin'>
                    <p><input type='text' name='id' className='int-area' placeholder='ID' autocomplete='off' required/></p>
                    <p><input type='password' name='pw' className='int-area' placeholder='Password' autocomplete='off' required/></p>
                    <button type='submit' className='loginBtn'>Sign in</button>
            </form>
    
            <div className='caption'>
                <a href='#' className='caption'>Forgot ID / PW?</a>
            </div>
        </div>
    );    
}

export default SignIn;