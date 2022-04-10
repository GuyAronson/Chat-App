import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePicInput from './ProfiePicInput.js';
import PasswordInput from './PasswordInput.js';
import UsernameInput from './UsernameInput.js';
import {validateEmail, validatePassword, checkValidation} from './util.js';

class Register extends React.Component{
    render(){
        return(
            <>
            <form onSubmit={checkValidation}>
                <h2 className = "topic">Register</h2>
                {/* userName input */}
                <UsernameInput/>
                {/* email input */}
                <div className="mb-3 tab tab-right">
                    <label className='form-label'>Email address</label>
                    <input type="email" id="emailInput" className="form-control" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <div id="emailErrorMesage" className="form-text error-message"></div>
                </div>
                {/* nickname input */}
                <div className="mb-3 tab tab-right">
                    <label className="form-label">Nickname</label>
                    <input type="text" id="nicknameInput" className="form-control" />
                </div>
                {/* Password input */}
                <PasswordInput/>
                {/* ProfilePic input */}
                <ProfilePicInput/>
                {/* Robot input */}
                <div className="mb-3 form-check tab">
                    <input id="checkRobot" type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">Confirm you're not a robot</label>
                </div>
                {/* Submit */}
                <div className="col-xs-1 text-center">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    <div className='hr-trick'>or</div>
                    <a href='loginPage.js' className="btn btn-light btn-lg">Login</a>
                </div>
            </form>
        </>
        );
    }
}

export default Register;