import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signForm, setSignForm] = useState(true);
    const Signup = () => {
        setSignForm(!signForm);
    }

    return (
        <div className='min-h-screen'>
            <div className='absolute bg-cover bg-center -z-10 bg-blue-400'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
            </div>
            <Header />
            <form className='bg-black p-12 w-3/12 mx-auto my-20 text-white rounded-lg bg-opacity-70'>
                <h1 className='text-3xl font-bold mb-7'> {signForm ? "Sign In" : "Sign Up"} </h1>
                {!signForm && <input type='text' placeholder='Name' className='p-2 w-full mb-4 bg-gray-200 rounded-lg' /> }
                <input type='text' placeholder='Email Address' className='p-2 w-full mb-4 bg-gray-200 rounded-lg' />
                <input type='password' placeholder='Password' className='p-2 w-full mb-4 bg-gray-200 rounded-lg' />
                <button className='w-full bg-red-600 p-2 rounded-lg'> {signForm ? "Sign In" : "Sign Up"} </button>
                <p className='mt-10'> {signForm ? <>New to Netflix? <span className='cursor-pointer hover:underline' onClick={Signup}>Sign up now</span></> : <>Already member <span className='cursor-pointer hover:underline' onClick={Signup}>Sign in now</span></> } </p>
            </form>
        </div>
    )
}

export default Login