import React from 'react'
import Cart from '@/components/cart/cart'
const page = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-background">
                <div className="container px-4 py-12 mx-auto mt-3">
                    <h1 className='text-4xl font-semibold text-center mb-5'>Your Cart</h1>
                    <Cart />
                </div>
            </div>

        </>
    )
}

export default page
