import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'


const offer = () => {
  return (
    <>
      <div className="offer-container relative   py-12 px-3 w-full flex flex-col item-center  h-full ">
      <h2 className="text-4xl font-bold tracking-tight mb-6">Types of   <span className="text-primary">Beat Licenses</span> we offered!</h2>
      <p className="text-zinc-400 md:text-2xl w-3/4 self-center sm:text-xl text-center">Explore the various types of licenses available on BeatStore, designed to cater to all your music production needs.</p>
        <div className="gradient absolute  "></div>
        <div className="container flex justify-around flex-wrap mt-12 gap-5">

         
          <div className="card rounded-xl min-w-90 flex-grow  border  border-white duration-300 bg-transparent-white backdrop-blur-md p-6">
            <div className="flex flex-col items-start ">
              <h2 className='text-white text-3xl font-bold'>Free For Profit</h2>
              <p className='text-zinc-400'>Usually for artist starting their career.</p>
              <p className='text-zinc-400 mt-3'>It's FREE!</p>
            </div>

            <div className="flex items-end">
              <span className="text-primary text-4xl font-bold"> &#8377; 0.00</span>
              <span className="text-zinc-400 text-sm ml-2"> / Track</span>
            </div>
            <ul className="mt-5 text-zinc-400 text-start">
              <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Commercial Use</li>
              <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Limited Usage</li>
              <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Best for beginners</li>
              <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/>Usually MP3 File available</li>
            </ul>

            <a href="/tracks/FreeForProfit " className="mt-5 w-full">
              <button className='btn duration-300 ease-in-out hover:bg-white/90 hover:brightness-90 bg-white p-4 w-full text-black mt-6 rounded-xl'> Explore Beats</button>
            </a>


          </div>
         
          <div className="card rounded-xl border  border-white  min-w-90 flex-grow duration-300 bg-transparent-white backdrop-blur-xl p-6">
            <div className="flex flex-col items-start ">
              <h2 className='text-white text-3xl font-bold'>Non-Exclusive</h2>
              <p className='text-zinc-400 text-start'>Perfect for unlimited usage in price.</p>
              <p className='text-zinc-400 mt-3'>Starting From!</p>
            </div>

            <div className="flex items-end">
              <span className="text-white text-4xl font-bold"> &#8377; 499.00</span>
              <span className="text-zinc-400 text-sm ml-2"> / Track</span>
            </div>
            <ul className="mt-5 text-zinc-400 text-start">
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Commercial Use</li>
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Unlimited Distribution</li>
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Non-Exclusive Rights</li>
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Usually MP3 + WAV File Available</li>
            </ul>

            <a href="/midrangetrack " className="mt-5 w-full">
              <button className='btn duration-300 ease-in-out hover:bg-white/90 hover:brightness-90 bg-white p-4 w-full text-black mt-6 rounded-xl'> Explore Beats</button>
            </a>


          </div>
         
          <div className="card rounded-xl min-w-90 flex-grow border  border-white   duration-300 bg-transparent-white backdrop-blur-md p-6">
            <div className="flex flex-col items-start ">
              <h2 className='text-white text-3xl font-bold'>Exclusive</h2>
              <p className='text-zinc-400'>Ideal for full control and exclusive rights.</p>
              <p className='text-zinc-400 mt-3'>Starting From!</p>
            </div>

            <div className="flex items-end">
              <span className="text-primary text-4xl font-bold"> &#8377; 1,999.00</span>
              <span className="text-zinc-400 text-sm ml-2"> / Track</span>
            </div>
            <ul className="mt-5 text-zinc-400 text-start">
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Commercial Use</li>
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Unlimited Access</li>
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Exclusive Rights,No One Purchase Leter</li>
            <li className='mb-3'><AiOutlineCheck className='inline text-primary text-xl'/> Usually MP3 + WAV + Stem File available</li>


            </ul>

            <a href="/midrangetrack " className="mt-5 w-full">
              <button className='btn duration-300 ease-in-out hover:bg-white/90 hover:brightness-90 bg-white p-4 w-full text-black mt-6 rounded-xl'> Explore Beats</button>
            </a>


          </div>
       
        </div>


      </div>

    </>
  )
}

export default offer
