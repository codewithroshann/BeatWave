import { Hero } from "@/components/hero"
import { BeatList } from "@/components/beat-list"
import { Beatcategory } from "@/components/beat-category"
import Marquee from "@/components/marquee"
import MusicPlayer from "@/components/musicPlayer"
import OfferComponent from '@/components/offer'
import BeatBuyingInfo from '@/components/beatbuyinfo'
import PaymentMethod from "@/components/paymentMethod"
import JoinUs from '@/components/joinUs'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1">
        <Hero />
        <div className="container px-4 py-12 mx-auto">
          <Beatcategory />
        </div>
        <div className="container px-4 py-12 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Featured  <span className="text-primary">Beats</span></h2>
          <BeatList />
        </div>
        {/* Beat Store Web App Marquee */}
        <div className="w-full px-4 container py-12 ">
          {/* <h2 className="text-3xl font-semibold mb-2"> <span className="text-primary">Beat </span>Store Showcase</h2> */}
          <Marquee
            pauseOnHover={true}
            speed={300}
            className="bg-gradient-to-r text-3xl from-gray-900 w-full to-gray-800 text-white font-bold py-6 rounded-lg"
          >
            🎵 WELCOME TO BEATWAVE - THE ULTIMATE BEAT MARKETPLACE 🎧  NEW RELEASES EVERY FRIDAY 🔥 PREMIUM TRAP BEATS 50% OFF 🎹 ROYALTY-FREE SAMPLES 🎸 EXCLUSIVE PRODUCER COLLABS 🥁 JOIN OUR PRODUCER COMMUNITY TODAY 🎵 USE CODE "FIRST10" FOR 10% OFF YOUR FIRST PURCHASE 🎧
          </Marquee>
        </div>
        <div className="container px-4 py-12 mx-auto text-center flex flex-col">

          <OfferComponent />
        </div>
        <div className="container px-4 py-12 mx-auto text-center flex flex-col">

          < BeatBuyingInfo />
        </div>
        <div className="container px-4 py-12 mx-auto text-center flex flex-col">

          < PaymentMethod />
        </div>
        <div className="container px-4 py-12 mx-auto text-center flex flex-col">
          < JoinUs/>
        </div>

      </main>


    </div>
  )
}
