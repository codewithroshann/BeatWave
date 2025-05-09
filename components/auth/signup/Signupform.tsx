'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setAlert,clearAlert } from '@/redux/slices/AlertReducer'
import Link from 'next/link'

const Signupform = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch()
    const handleSignup = async (e: any) => {
        e.preventDefault(); // Prevent page reload
        setError('');
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const phoneRegex = /^[6-9]\d{9}$/; // Indian 10-digit number starting with 6–9
        if (!gmailRegex.test(email)) {
            setError('Please enter a valid Gmail address.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            setError('Enter a valid Number.');
            return;
        }

        try {
            // Send POST request using fetch
            const response = await fetch('http://localhost:8000/auth/user/signup', {
                method: 'POST', // Set method to POST
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                    password,
                    gender,
                }),
            });
           
            setIsLoading(true)
            // Check if response is successful (status code 200-299)
            if (response.ok) {
                const data = await response.json();
                dispatch(setAlert({message:"Signup Successfully!",type:"success"}))
                if (data.redirectUrl) {
                    setTimeout(() => {
                        router.push(data.redirectUrl);
                    }, 2500);
                }
            } else {
                const data = await response.json();

            }
        } catch (error) {
            setError('Something went wrong. Please try again.'); // Handle network errors
        }
        setTimeout(() => {
            setIsLoading(false)
            dispatch(clearAlert())
        }, 3000)
    };
  return (
   <>
       <div className='flex order-2 sm:order-none flex-col  items-start cols-start-2'>
                        <h1 className='text-3xl font-bold mb-2'> Create an Account</h1>
                        <p className='text-zinc-400 text-sm '> Join our platform and start exploring...</p>


                        <form onSubmit={handleSignup} className="max-w-xl mt-6 w-full">
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={(e) => setFullName(e.target.value)} type="text" name="fullname" id="name" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${isLoading == true ? "cursor-not-allowed " : ""}`} placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${isLoading == true ? "cursor-not-allowed " : ""}`} placeholder=" " required />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input onChange={(e) => setPhone(e.target.value)} type="tel" minLength={10} maxLength={10} name="phone" id="phone" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${isLoading == true ? "cursor-not-allowed " : ""}`} placeholder=" " required />
                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input minLength={8} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="floating_last_name" className={`${isLoading == true ? 'cursor-not-allowed' : ''} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " required />
                                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                            </div>

                            <div className="flex mb-6">
                                <div className="flex items-center me-4">
                                    <input onChange={(e) => setGender(e.target.value)} id="male" type="radio" value="male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input onChange={(e) => setGender(e.target.value)} id="female" type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input onChange={(e) => setGender(e.target.value)} id="others" type="radio" value="others" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="others" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                                </div>
                            </div>
                            <div className="flex items-center mb-8">
                                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                                <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-primary hover:underline">terms and conditions</a>.</label>
                            </div>

                            <button type="submit" className={`text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full duration-100  px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary/70 dark:focus:ring-blue-800 ${isLoading == true ? "cursor-not-allowed opacity-50" : ""}`}>Signup For Free</button>
                        </form>
                        {error && <p className="text-red-500 mt-3">{error}</p>}
                        <p className='text-sm mt-6 '>Already i have an account?<Link href="/auth/user/login" className='text-primary ml-2'>Login</Link></p>
                    </div>
   </>
  )
}

export default Signupform
