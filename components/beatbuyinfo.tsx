import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCartOutline, IoWalletOutline } from "react-icons/io5";

const beatbuyinfo = () => {
  return (
    <>
      <div className="container grid lg:grid-cols-2  gap-6">

        <div className="space-y- text-start">
          <div className="bg-zinc-800 rounded-xl text-sm self-start inline-block px-3 py-2 mb-5">
            Purchasing Music Beats
          </div>
          <h1 className="text-4xl font-bold mb-5">Buy Beats In <span className="text-primary">Three Easy Steps </span></h1>
          <p className='text-zinc-400 text-lg/7'>Discover our transparent and user-friendly process for purchasing beats on the BeatStore platform. Explore our selection, choose your desired beats, and complete the transaction securely in Indian Rupees (INR).</p>

        </div>
        <div className="space-y-">

          <div className="bg-transparent-white gap-6 rounded-xl text-sm self-start flex items-center px-3 py-2 mb-5">
            <FaMagnifyingGlass className='bg-zinc-800 h-[60px] w-[60px] px-2 py-3 rounded-full text-2xl ' />
            <div className="text-start">
              <h3 className='font-medium text-xl'>Browse Beats</h3>
              <p className='text-zinc-400 text-sm'>Explore our extensive library of high-quality beats.</p>
            </div>
          </div>
          <div className="bg-transparent-white gap-6 rounded-xl text-sm self-start flex items-center px-3 py-2 mb-5">
            <IoCartOutline className='bg-zinc-800  h-[60px] w-[60px] px-2 py-3 rounded-full text-2xl ' />
            <div className="text-start">
              <h3 className='font-medium text-xl'>Add To Cart</h3>
              <p className='text-zinc-400 text-sm'>Add your desired beats to the shopping cart.</p>
            </div>
          </div>
          <div className="bg-transparent-white gap-6 rounded-xl text-sm self-start flex items-center px-3 py-2 mb-5">
            <IoWalletOutline className='bg-zinc-800 h-[60px] w-[60px] px-2 py-3 rounded-full text-2xl ' />
            <div className="text-start">
              <h3 className='font-medium text-xl'>Secure Checkout</h3>
              <p className='text-zinc-400 text-sm'>Complete your purchase securely, powered by Razorpay.</p>
            </div>
          </div>


        </div>


      </div>

    </>
  )
}

export default beatbuyinfo
