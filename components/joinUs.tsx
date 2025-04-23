import React from 'react'

const joinUs = () => {
    return (
        <>
        <div className="container lg:p-6 md:p-12">

            <div className="grid lg:grid-cols-2  gap-8">
                <div className='relative'>
                <img src="../paymentsLogo/dj.jpg" alt="" />
                <div className="absolute right-0 text-start p-4 bg-transparent-white backdrop-blur-lg rounded-lg  lg:translate-x-8 sm:translate-x-6  translate-y-[-150px]" >
                    <h3 className='text-xl font-semibold'>User-Friendly Platform</h3>
                    <p className="text-sm">Easily manage your beats, sales, and connect with customers.</p>
                </div>
                </div>

                <div className=" text-start lg:p-5 sm:py-5">
                    <h1 className="text-4xl font-bold mb-4"> <span className="text-primary">Join </span>Us Today</h1>
                    <p className='text-zinc-400 text-xl/7 mb-6'>Join our platform and unlock a world of opportunities. Sign up now and start selling your beats online.</p>
                    <a href="/user/signup" className=' duration-300 ease-in-out hover:bg-white/90 hover:brightness-90 bg-white p-4 w-full text-black mt-6 rounded-xl'> Sign Up Now</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default joinUs
