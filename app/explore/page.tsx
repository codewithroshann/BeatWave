import React from 'react'
import Explore from '@/components/explore/explore'
import { FaSearch } from "react-icons/fa";
const page = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-background">
                <div className="container px-4 py-12 mx-auto mt-5">
                    <h1 className='text-4xl font-bold text-center mb-3'>Browse Best Beats & Samples!</h1>
                    <p className='text-zinc-400 max-w-[700px] text-center mx-auto font-medium text-lg/7 mb-6' >Discover and purchase high-quality beats and sound kits for your next project. Our platform connects you with talented producers from around the world.</p>
                    <div className='flex items-center justify-center mt-8'>
                        <form action="" className='border-2 border-[gray]  flex items-center bg-zinc-700/50 rounded-md '>

                            <input type="text" list='ganre' name='search' placeholder='Search Tracks...' className='mr-2 p-4 outline-none max-w-[250px] sm:min-w-[400px]  bg-transparent' />
                            <datalist id="ganre">
                                <option value="Drill"/>
                                    <option value="Trap"/>
                                        <option value="Hardcore"/>
                                            <option value="R&B"/>
                                            </datalist>
                                            <button type='submit' className='py-4 px-5 hover:bg-primary/70 duration-200 border-2 border-solid border-primary bg-primary rounded-md'><FaSearch className='h-5 w-5 text-white' /></button>

                                        </form>
                                    </div>
                                    <Explore />
                                </div>
                            </div>

                    </>
                    )
}

                    export default page
