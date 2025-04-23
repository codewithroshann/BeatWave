import React from 'react'

const paymentMethod = () => {
    return (
        <>
            <div className="container text-start">
                <h1 className="font-bold text-4xl mb-5">Payment <span className='text-primary '>Method</span></h1>
                <p className='text-lg text-zinc-400 mb-8'>Choose your preferred payment method to purchase beats online on BeatStore.</p>


                <div className="grid xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4   ">
                    <div className='flex justify-center items-center rounded-md gap-4 duration-100 hover:bg-zinc-700/50  border py-4 px-4 flex-col'>
                        <img src="../paymentsLogo/UPI.9024366a.svg" className="h-[60px] w-[60px] " alt="" />
                        <h3>UPI</h3>
                    </div>
                    <div className='flex justify-center items-center duration-100 hover:bg-zinc-700/50 rounded-md gap-4  border py-4 px-4 flex-col'>
                        <img src="../paymentsLogo/card.a2db883c.webp" className="h-[60px] w-[60px] " alt="" />
                        <h3>Credit/Debit Card</h3>
                    </div>
                    <div className='flex justify-center items-center duration-100 hover:bg-zinc-700/50 rounded-md gap-4  border py-4 px-4 flex-col'>
                        <img src="../paymentsLogo/netbanking.a765d1e8.webp" className="h-[60px] w-[60px] " alt="" />
                        <h3>Netbanking</h3>
                    </div>
                    <div className='flex justify-center items-center duration-100 hover:bg-zinc-700/50 rounded-md gap-4  border py-4 px-4 flex-col'>
                        <img src="../paymentsLogo/paypal.4d5bed56.webp" className="h-[60px] w-[60px] " alt="" />
                        <h3>Paypal Wallet</h3>
                    </div>
                    <div className='flex justify-center items-center duration-100 hover:bg-zinc-700/50 rounded-md gap-4  border py-4 px-4 flex-col'>
                        <img src="../paymentsLogo/razorpay.9ed3a834.webp" className="h-[40px] w-[90px] " alt="" />
                        <h3>Razorpay</h3>
                    </div>
                    <div className='flex justify-center items-center duration-100 hover:bg-zinc-700/50 rounded-md gap-4  border py-4 px-4 flex-col'>
                        <img src="../paymentsLogo/paylater.d3eb338c.webp" className="h-[60px] w-[60px] " alt="" />
                        <h3>Pay Later</h3>
                    </div>

                </div>

            </div>
        </>
    )
}

export default paymentMethod
