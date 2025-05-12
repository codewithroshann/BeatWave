import React from 'react'
import Link from 'next/link'


const page = () => {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col bg-background">
                <div className={`container px-5 py-12 mx-auto mt-3 max-w-[800px]`}>
                    <div className='float-right text-sm'> Effactive Date:8 may, 2025</div>
                    <h1 className='text-3xl font-semibold mt-3 mb-5'>Terms & Conditions</h1>
                    <div className="mb-4 text-base leading-relaxed">Wellcome to <Link href={"/"} target="_blank" className='text-primary'>Beatwave.in</Link>.your trusted digital beat store. By using our website, purchasing beats, or accessing any of our services, you agree to the following terms and conditions. These terms are designed to protect both you and us—ensuring fair, transparent, and secure use of our platform.</div>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Overview</h3>
                    <p className='text-base leading-relaxed mb-5'>BeatWave is a digital platform that allows users to browse, purchase, and download instrumental music beats. All content is owned or licensed by Beat Wave and is subject to these Terms.</p>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Products and Licensing</h3>
                    <p className='text-base leading-relaxed mb-5'>Products available for purchase through the BeatWave platform include instrumentals (referred to interchangeably as “Instrumental” or “Beat” or “Sound Kit”). These instrumentals are uploaded by US and made available for licensing through agreements, such as:</p>
                    <ul className='list-disc pl-5 mb-4'>
                        <li className='mb-2 ml-5'> Free For Profit (Non-Exclusive License Agreement),</li>
                        <li className='mb-2 ml-5'> Non-Exclusive License Agreement, and</li>
                        <li className='mb-2 ml-5'>Exclusive License Agreement </li>
                    </ul>
                    <p className='text-base leading-relaxed mb-5'>(Collectively referred to as “License Agreements”). These agreements govern the usage rights of the instrumentals and are entered into directly between Buyers and Us. BeatWave does not act as a party to these agreements and does not license or sublicense instrumentals.</p>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Our Services</h3>
                    <p className='text-base leading-relaxed mb-5'> <strong>BeatWave</strong> is an online marketplace where music producers can upload and sell beats, and customers can purchase licenses to use those beats in their own creative projects.

                        We offer <strong>Free For Profit</strong> ,<strong>non-exclusive</strong> and <strong>non-exclusive</strong> licenses, which clearly define how a beat can be used. You can find full license terms on each product’s page.</p>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Licensing & Ownership</h3>
                    <ul className='list-disc pl-5 mb-5'>
                        <li className='mb-2 ml-5'>When you purchase a beat, you receive a <strong>license to use </strong>, not full ownership.</li>
                        <li className='mb-2 ml-5'>The original producer <strong>retains copyrights</strong> and moral rights to the beat.</li>
                        <li className='mb-2 ml-5'>You may not resell, redistribute, or claim ownership of any beat unless explicitly allowed by the license you purchase.</li>
                        <li className='mb-2 ml-5'>All license terms are legally binding and must be respected at all times</li>
                    </ul>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Payment & Refund Policy</h3>
                    <ul className='list-disc pl-5 mb-5'>
                        <li className='mb-2 ml-5'>Payments are handled securely through trusted third-party processors.</li>
                        <li className='mb-2 ml-5'>Due to the <strong>instant delivery</strong> and <strong>non-returnable</strong> nature of digital files, <strong>all sales are final</strong>.</li>
                        <li className='mb-2 ml-5'>If you experience issues with downloads or payments, contact our support team for assistance—we’re here to help.</li>
                    </ul>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Account Responsibility</h3>
                    <ul className='list-disc pl-5 mb-5'>
                        <li className='mb-2 ml-5'>You are responsible for all activity under your Beat Wave account.</li>
                        <li className='mb-2 ml-5'>Keep your login details secure and never share them with others.</li>
                        <li className='mb-2 ml-5'>If you believe your account has been compromised, notify us immediately.</li>
                    </ul>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Service Availability</h3>
                    <p className='text-base leading-relaxed mb-5'>We aim for 24/7 access to Beat Wave, but we cannot guarantee uninterrupted service due to updates, technical issues, or maintenance. We’re committed to minimizing any disruptions.</p>
                    <h3 className='text-2xl font-semibold mt-3 mb-2'>Changes to These Terms</h3>
                    <p className='text-base leading-relaxed mb-5'>We may update these Terms from time to time. When we do, we’ll post the updated version on this page and revise the "Effective Date" at the top.
                        <br />

                        Your continued use of Beat Wave after any changes means you accept the updated Terms.</p>
              <h3 className='text-2xl font-semibold mt-3 mb-2'>Contact Us</h3>
                    <p className='text-base leading-relaxed mb-4'>If you have questions, concerns, or need support, we’re just a message away.</p>
                    <ul>
                        <li className='mb-2 flex items-center gap-2'>&#x1F4E7; Email : <Link href={'mailto:info@beatstore'} className='text-primary hover:underline'>support@beatwave.in</Link> </li>
                        <li className='mb-2 flex items-center gap-2'>&#x1F310; Website : <Link href={'/'} className='text-primary hover:underline'>Beatwave.in</Link> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default page
