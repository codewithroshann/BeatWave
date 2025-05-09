import Image from "next/image";
import LoginImage from '@/public/illustations/Login-amico.svg'
import LoginForm from "./LoginForm";
import Link from "next/link";
const login = () => {


    return (
        <>
            <div className="container md:p-12">
                <div className="grid  sm:grid-cols-2  grid-cols-1 mt-5  gap-10 sm:gap-6" >
                    <div className=' sm:order-none'>
                        <h1 className='text-6xl font-bold mb-5 break-words'>Discover <span className='text-primary'>BeatWave</span>Best Beats.</h1>
                        <Link href="/auth/user/signup" className='btn px-3 py-2 text-sm font-medium text-center text-white bg-primary mt-6 rounded-sm ' >Signup</Link>
                        <div className=" ">
                            <Image className=''
                                src={LoginImage}
                                alt=""
                                height={250}
                                width={300}
                            />

                        </div>
                    </div>
                    {/* Form */}
                    <LoginForm />


                </div>
            </div>
        </>
    )
}

export default login
