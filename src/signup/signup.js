import React from 'react';
import './signup.css';

function SignUp(){
    return(
        <div>
            <h1 className='title2'>Create Account</h1>
            <form action='' className='information'>
                <div className='int-area2'>
                    <input type='text' className = 'inputInfo' name='name' placeholder = 'Username' autocomplete='off' required/>
                </div>
                <div className='int-area2'>
                    <input type='password' className = 'inputInfo' name='pw' placeholder = 'Password' autocomplete='off' required/>
                </div>
                <div className='int-area2'>
                    <input type='password' className = 'inputInfo' name='pw-check' placeholder = 'Confirm Password' autocomplete='off' required/>
                </div>
                <div className='int-area2'>
                    <input type='number' className = 'inputInfo' name='student-number' placeholder = 'Student number' autocomplete='off' required/>
                </div>
                <div className='int-area2'>
                    <select className='inputInfo' name='major' >
                        <option selected>Select major</option>
                        <option value='1'>기계공학과</option>
                        <option value='2'>메카트로닉스학과</option>
                        <option value='3'>산업경영학과</option>
                        <option value='4'>산업디자인학과</option>
                        <option value='5'>전기전자정보통신학과</option>
                        <option value='6'>컴퓨터공학과</option>
                        <option value='7'>화학공학과</option>                
                    </select>
                </div>
                <div className='int-area2'>
                    <input type='number' className = 'inputInfo' name='phone-number' placeholder = 'Phone number' autocomplete='off' required/>
                </div>

                <br></br>

                <div className='btn-area'>
                    <button type='submit' className='signUpBtn'>Sign up</button>
                </div>
                <div className='btn-area'>
                    <button type='reset' className='signUpBtn'>Cancel</button>
                </div>

            </form>
        </div>
    );
}

export default SignUp;