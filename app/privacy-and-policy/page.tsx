import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-background">
        <div className={`container px-5 py-12 mx-auto mt-3 max-w-[800px]`}>
          <div className='float-right text-sm'> Effactive Date: 8 may, 2025</div>
          <h1 className='text-3xl font-semibold mt-3 mb-5'>Privacy & Policy</h1>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>1. Information We Collect</h3>
          <p className='text-base leading-relaxed mb-5'>We collect personal and non-personal information to provide and improve our services.</p>
          <p className='text-base leading-relaxed mb-3'><strong>Personal Information:</strong> When you create an account, make a purchase, or contact us, we may collect: Your name, Email address, Billing information,  IP address, User account details</p>
          <p className='text-base leading-relaxed mb-5'><strong>Non-Personal:</strong> We also collect data that does not directly identify you: Browser type, Device information , Pages visitedm, Referral sources, Cookies and usage data, </p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>2. How We Use Your Information</h3>
          <p className='text-base leading-relaxed mb-5'>We use your information to: Process transactions and deliver purchases, Provide customer support, Improve our website and user experience, Send important updates or promotional emails (you can opt out), Detect fraud or unauthorized activit</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>3. Sharing Your Information</h3>
          <p className='text-base leading-relaxed mb-4'>We do not sell your personal information. We may share your data with:</p>
          <ul className='list-disc pl-5 mb-5'>
            <li className='mb-2 ml-5'>Trusted third-party services (e.g., payment processors like Stripe or PayPal)</li>
            <li className='mb-2 ml-5'>Legal authorities, if required by law</li>
            <li className='mb-2 ml-5'>Web analytics services (like Google Analytics) for performance tracking</li>
            <li className='mb-2 ml-5'>All third-party services are bound by confidentiality and data protection obligations.</li>
          </ul>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>4. Cookies & Tracking Teachnologies.</h3>
          <p className='text-base leading-relaxed mb-5'>We use cookies to: Keep you logged in, Remember your preferences, Track how users interact with our site,
            <br /> You can control cookies through your browser settings.Disabling them may affect your experience on Beat Wave.</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>5. Data Security</h3>
          <p className='text-base leading-relaxed mb-5'>We take security seriously. Your data is stored on secure servers and protected with industry-standard encryption and firewall systems. While no system is 100% secure, we do our best to keep your information safe.</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>6. Your Rights and Choices</h3>
          <p className='text-base leading-relaxed mb-4'>Depending on your location, you may have the right to:</p>
          <ul className='list-disc pl-5 mb-4'>
            <li className='ml-5 mb-2'>Access, correct, or delete your personal data</li>
            <li className='ml-5 mb-2'>Withdraw consent for marketing communications</li>
            <li className='ml-5 mb-2'>Request a copy of your data</li>
            <li className='ml-5 mb-2'>Request that we stop using your data</li>
          </ul>
          <p className='text-base leading-relaxed mb-5'>To exercise any of these rights, please contact us at <Link className='text-primary hover:underline' href="mailto:support@beatwave.com">support@beatwave.in</Link> .</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>7. Children's Privacy</h3>
          <p className='text-base leading-relaxed mb-5'>Beat Wave is not intended for children under the age of 13. We do not knowingly collect personal data from children. If we learn we have collected such data, we will delete it promptly.</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>8. Third-Party Links</h3>
          <p className='text-base leading-relaxed mb-5'>Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before submitting any personal information.</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>9. Changes to This Policy</h3>
          <p className='text-base leading-relaxed mb-5'>We may update this Privacy Policy from time to time. When we do, we’ll update the "Effective Date" above. Continued use of Beat Wave means you accept the updated policy.</p>
          <h3 className='text-2xl font-semibold mt-3 mb-2'>10. Contact Us</h3>
          <p className='text-base leading-relaxed mb-5'>If you have any questions or concerns about this Privacy Policy, feel free to reach out:</p>
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
