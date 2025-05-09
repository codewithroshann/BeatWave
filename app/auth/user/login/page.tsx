import React from 'react'
import Login from '@/components/auth/login/login'

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container px-4 py-12 mx-auto mt-5">
          <Login />
        </div>
      </div>
    </>
  )
}

export default page
