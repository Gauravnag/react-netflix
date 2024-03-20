import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate';
import { BG_IMG } from '../utils/constants';

const Login = () => {
    const [signForm, setSignForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const Signup = () => {
        setSignForm(!signForm);
    }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const handleValidation = () => {
       const errorMessage = checkValidate(email.current.value, password.current.value, name.current.value);
       setErrorMsg(errorMessage);
    }

    return (
        <div className='min-h-screen'>
            <div className='absolute bg-cover bg-center -z-10 bg-blue-400'>
                <img src={BG_IMG} />
            </div>
            <Header />
            <form onSubmit={e => e.preventDefault()} className='bg-black p-12 w-3/12 mx-auto my-20 text-white rounded-lg bg-opacity-70'>
                <h1 className='text-3xl font-bold mb-7'> {signForm ? "Sign In" : "Sign Up"} </h1>
                {!signForm && <input ref={name} type='text' placeholder='Name' className='p-2 w-full mb-4 bg-gray-200 rounded-lg text-black' /> }
                <input ref={email} type='text' placeholder='Email Address' className='p-2 w-full mb-4 bg-gray-200 rounded-lg text-black' />
                <input ref={password} type='password' placeholder='Password' className='p-2 w-full mb-4 bg-gray-200 rounded-lg text-black' />
                <p className='text-xl text-red-500'> {errorMsg} </p>
                <button className='w-full bg-red-600 p-2 rounded-lg' onClick={handleValidation}> {signForm ? "Sign In" : "Sign Up"} </button>
                <p className='mt-10'> {signForm ? <>New to Netflix? <span className='cursor-pointer hover:underline' onClick={Signup}>Sign up now</span></> : <>Already member <span className='cursor-pointer hover:underline' onClick={Signup}>Sign in now</span></> } </p>
            </form>
        </div>
    )
}

export default Login