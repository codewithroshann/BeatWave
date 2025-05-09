import React from 'react'
import SignUp from '@/components/auth/signup/signup'
const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container px-4 py-12 mx-auto mt-5">
          <SignUp />
        </div>
      </div>
    </>
  )
}

export default page
