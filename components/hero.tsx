import { Button } from "@/components/ui/button"
import { url } from "inspector"

export function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      ></div>
      <div
        className="h-[500px] w-full bg-cover bg-center" style={{ backgroundImage:"url('./hero-image.jpg')"}}></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start container px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl mb-4">
          Find the  <span className="text-primary">Perfect Beat </span>for Your Next Track
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-lg mb-6">
          Explore thousands of high-quality beats from top producers worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Browse Beats
          </Button>
          {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Sell Your Beats
          </Button> */}
        </div>
      </div>

    </div>
  )
}
