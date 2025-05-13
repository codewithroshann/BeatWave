import React from 'react'
import Account from '@/components/Account/Account'
const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container px-4 py-12 mx-auto mt-5">
          <h1 className='text-2xl font-bold text-center mb-3'>Account Setting</h1>
          <Account />
        </div>
      </div>
    </>
  )
}

export default page
