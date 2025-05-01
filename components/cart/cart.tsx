"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import HeroImage from "@/public/hero-image.jpg"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { set } from 'date-fns';
const cart = () => {
    const [beats, setBeats] = useState<Beat[]>([]);
    type Beat = {
        price: string | number;
        quantity: number;
    };

    useEffect(() => {
        const beatsString = localStorage.getItem('cartProducts');
        if (beatsString) {
            const beatsObject = JSON.parse(beatsString);
            setBeats(beatsObject);
        }
    }, [])

    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                <div className='flex flex-col gap-5 flex-1'>
                    {beats.map((beat: any, key) => (
                        <div className='flex flex-col p-3 border rounded-md' key={key}>
                            <div className="flex justify-between aligns-center mb-3 ">
                                <h3 className='text-xl ml-2 font-semibold'>{beat.title}</h3>
                                <span className='p-2 rounded-md bg-zinc-700 text-center'>
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
                        <b className=''>Sub-Total :</b><span className='flex items-center'> <FaRupeeSign className='text-xs' />       {(
                            beats.map(item => parseFloat((item?.price ?? '0').toString().replace(/,/g, '')))
                                .reduce((prev, curr) => prev + curr, 0)
                                .toLocaleString()
                        )}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <b className=''>Convenience Fee :</b><span className='flex items-center'> <FaRupeeSign className='text-xs' />0.00</span>
                    </div>
                    <div className="grid grid-cols-2 ">
                        <b className=''>Discount :</b><span className='flex items-center' > <FaRupeeSign className='text-xs' />0.00</span>
                    </div>
                    <div className="p-3 grid grid-cols-2 border rounded-sm mt-5">
                        <h3 className='text-2xl font-bold text-primary'>Total: </h3> <span className="flex items-center text-xl"><FaRupeeSign className='text-md' /> 599.00</span>
                    </div>

                    <button className='bg-white hover:bg-white/80 duration-100  text-black p-2 mt-3 rounded-sm w-full'>Pay<span className='font-bold ml-2'>

                        {(
                            beats
                                .map(item => parseFloat((item?.price ?? '0').toString().replace(/,/g, '')))
                                .reduce((prev, curr) => prev + curr, 0)
                                .toLocaleString()
                        )}



                    </span></button>

                </div>
            </div>

        </>
    )
}

export default cart
