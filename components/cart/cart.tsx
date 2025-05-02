"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';


import HeroImage from "@/public/hero-image.jpg"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { removeFromCart } from '@/redux/slices/cartReducer';
import { setAlert , clearAlert} from '@/redux/slices/AlertReducer';

const cart = () => {
    const dispatch = useDispatch();
    const beats = useSelector((state: any) => state.cart.cartItems);

    if (beats.length == 0) {
        return <div className='text-center text-white/20 duration-100 flex items-center justify-center h-[500px] text-6xl mt-8 font-bold'>
            Empty Cart <FaShoppingCart />
        </div>
    }


  
    
    const handleRemove = (beat: any) => {
        dispatch(removeFromCart(beat))
        dispatch(setAlert({ message: "Beat Removed Successfully From Cart!", type: "success" }))
        setTimeout(() => {
          dispatch(clearAlert())
        }, 3000);
    }

    return (
        <>
            <div className="flex flex-col min-h-full md:flex-row gap-5 mt-5">
                <div className='flex flex-col gap-3 flex-1'>
                    {Array.isArray(beats) && beats.map((beat: any, key) => (
                        <div className='flex flex-col p-3 border rounded-md' key={key}>
                            <div className="flex justify-between aligns-center mb-3 ">
                                <h3 className='text-xl ml-2 font-semibold'>{beat.title}</h3>
                                <span className='p-2 rounded-md bg-zinc-700 text-center hover:bg-zinc-700/80' onClick={() => handleRemove(beat)}>
                                    <RiDeleteBinLine />
                                </span>

                            </div>
                            <div className='flex p-3 flex-wrap border rounded-md'>
                                <div className='min-h-[100px] h-[100px] mb-4 '>

                                    <Image
                                        src={HeroImage}
                                        alt="image"
                                        height={100}
                                        className='rounded-lg'
                                    />
                                </div>
                                <div className="beat-info ml-4">
                                    <div className="grid grid-cols-2 gap-2 items-center">
                                        <b className='text-primary'>Beat Producer : </b> <span className='text-sm ml-2'>{beat.producer}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 items-center">
                                        <b className='text-primary'>Audio File: </b> <span className='text-sm ml-2'>{beat.file}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 items-center">
                                        <b className='text-primary'>Lisence Type : </b> <span className='text-sm ml-2'>Free For Profit</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 items-center">
                                        <b className='text-primary'>Price : </b> <span className='text-sm ml-2 flex items-center'><FaRupeeSign className='text-xs' />{beat.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                <div className='w-full md:max-w-[450px]  border rounded-md p-3 flex-1 h-fit'>
                    <h3 className='text-3xl font-semibold mb-5'> Order Summary</h3>
                    <div className="grid grid-cols-2 ">
                        <b className=''>Sub-Total :</b><span className='flex items-center'> <FaRupeeSign className='text-xs' />
                            {Array.isArray(beats) && beats.map(item => parseFloat((item?.price ?? '0').toString().replace(/,/g, '')))
                                .reduce((prev, curr) => prev + curr, 0)
                                .toLocaleString()
                            }
                        </span>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <b className=''>Convenience Fee :</b><span className='flex items-center'> <FaRupeeSign className='text-xs' />0.00</span>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <b className=''>Discount :</b><span className='flex items-center' > <FaRupeeSign className='text-xs' />0.00</span>
                    </div>
                    <div className="p-3 grid grid-cols-2 border rounded-sm mt-5">
                        <h3 className='text-2xl font-bold text-primary'>Total: </h3> <span className="flex items-center text-xl"><FaRupeeSign className='text-md' />
                            {Array.isArray(beats) && beats.map(item => parseFloat((item?.price ?? '0').toString().replace(/,/g, '')))
                                .reduce((prev, curr) => prev + curr, 0)
                                .toLocaleString()
                            }
                        </span>
                    </div>

                    <button className='bg-white hover:bg-white/80 duration-100  text-black p-2 mt-3 rounded-sm w-full'>Pay<span className='font-bold ml-2'>

                        {Array.isArray(beats) &&
                            beats
                                .map(item => parseFloat((item?.price ?? '0').toString().replace(/,/g, '')))
                                .reduce((prev, curr) => prev + curr, 0)
                                .toLocaleString()
                        }



                    </span></button>

                </div>
            </div>

        </>
    )
}

export default cart
