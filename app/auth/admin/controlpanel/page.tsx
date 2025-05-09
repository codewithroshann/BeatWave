import React from 'react'
import PanelForm from '@/components/controlPanel/panelForm'

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container px-4 py-12 mx-auto mt-5">
          <h1 className='text-4xl font-bold text-center mb-10'>Admin Control Panel</h1>
          <div className="flex justify-center items-center">
          <PanelForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
