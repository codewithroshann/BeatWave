"use client"
import React, { useState } from 'react'
import Link from 'next/link';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: any) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await fetch("http://localhost:8000/auth/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            console.log(password)

        } catch (error) {

        }
    }
    return (
        <>
            <div className='flex  sm:order-none flex-col  items-start cols-start-2'>
                <h1 className='text-3xl font-bold mb-2'> Login</h1>
                <p className='text-zinc-400 text-sm '> Join our platform and start exploring...</p>


                <form className="max-w-xl mt-6 w-full" onSubmit={handleLogin}>

                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>


                    <div className="flex items-center mb-8">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                        <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</Link>.</label>
                    </div>

                    <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full duration-100  px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary/70 dark:focus:ring-blue-800">Login</button>
                </form>
                <p className='text-sm mt-6 '>I don't have an account?<a href="/auth/user/login" className='text-primary ml-2'>Signup</a></p>
            </div>
        </>
    )
}

export default LoginForm
