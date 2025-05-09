import Image from 'next/image'
import SignupImage from '@/public/illustations/Signup-amico.svg'
import Signupform from './Signupform'
import  Link  from 'next/link'

const signup = () => {

     return (
        <>
            <div className="container md:p-12">

                <div className="grid  sm:grid-cols-2  grid-cols-1 mt-5  gap-10 sm:gap-6" >
                    

                    {/* Form */}
                    <Signupform/>
                
                    <div className='order-1 sm:order-none'>
                        <h1 className='text-6xl font-bold mb-5'> Join <span className='text-primary'>BeatWave</span>,it is FREE!</h1>
                        <Link href="/auth/user/login" className='btn px-3 py-2 text-sm font-medium text-center text-white bg-primary mt-6 rounded-sm ' >Login</Link>
                        <div className=" ">

                            <Image className=' '
                                src={SignupImage}
                                alt="hey"
                                height={250}
                                width={300}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signup
