import React,{useState} from 'react';
import "./LogIn.css"
import SigninScreen from './SigninScreen';

const Login = () => {
    const [signin, setsignin] = useState(false)

    return (
        <div className='login'>
            <div className='log_in_cred'>
                <img
                    className="nav_logo"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt="Netflix Logo"
                />

                <button onClick={() => setsignin(true)} className='sign_in'>Signin</button>
            </div>
            {/* <div className='black_shadow'>

            </div> */}

            {signin ? <SigninScreen/> : (<div className='login_form'>
                <h1 id="" class="our-story-card-title">Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <form className='formik'>
                    <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
                    <div className='forms' >
                        <input className='login_input' type="text" />
                        <button className='getStarted'>Get Started</button>x
                    </div>
                </form>
            </div>)}
        </div>
    )
}

export default Login