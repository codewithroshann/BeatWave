"use client"
import React, { useState } from 'react'
import { BeatCard } from '@/components/beat-card'
import { BeatList } from '@/components/beat-list'


const explore = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <>
      <div className=" flex flex-col mt-5 w-full">
        <div className=" my-10" >
          <BeatList count={visibleCount} />
        </div>
        <button 
        type="button" className="focus:outline-none w-[150px] mt-8 self-center text-white bg-primary hover:bg-primary/70 rounded-lg  px-5 py-2.5 mb-2 dark:bg-primary dark:hover:bg-primary/70 duration-200 dark:focus:ring-primary" onClick={loadMore}>Load More</button>
      </div>
    </>
  )
}

export default explore
