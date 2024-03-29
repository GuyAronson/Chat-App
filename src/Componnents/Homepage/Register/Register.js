import React from 'react';
import ProfilePicInput from '../Input/ProfiePicInput'
import PasswordInput from '../Input/PasswordInput.js';
import UsernameInput from '../Input/UsernameInput.js';
import {checkSubmitValidation} from '../../../util.js';
import {Link ,useNavigate } from 'react-router-dom';

export const Register = ({setUser}) => { 
    let navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        if(checkSubmitValidation({event, setUser})){
            // If the validation succeeded it will navigate to the chat page
            navigate(`/chat/${event.target.usernameInput.value}`, { replace: true });
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
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
            <div className="col-xs-1 text-center mb-3">
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                <div className='hr-trick'>or</div>
                <Link to='/login' className="btn btn-light btn-lg">Login</Link>
            </div>
        </form>
    </>
    );
}

export default Register;