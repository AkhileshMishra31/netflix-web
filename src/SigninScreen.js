import React, { createRef } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import "./SigninScreen.css"
const SigninScreen = () => {

    const emailref = createRef();
    const passwordref = createRef();

    const register = (e) => {
        e.preventDefault();
        console.log(emailref.current);
        console.log(passwordref);
        createUserWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
            .then((res) => {
                console.log(res.user.value)
            })
            .catch(err => console.log(err))
    }

    const login = (e) => {
        e.preventDefault();
        console.log(emailref.current.value);
        signInWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
        .then((res) => {
            console.log(res.user)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className='sign_in_form'>
                <h1 data-uia="login-page-title">Sign In</h1>
                <form className='log_in_form'>
                    <input ref={emailref} type="email" placeholder='Email' />
                    <input ref={passwordref} type="password" placeholder='password' />
                    <button onClick={login}>Sign in</button>
                </form>
                <div class="login-signup-now" data-uia="login-signup-now">New to Netflix? <a class="" target="_self" href="/" onClick={register}>Sign up now</a>.</div>
            </div>
        </>
    )
}

export default SigninScreen