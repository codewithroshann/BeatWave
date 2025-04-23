import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Disc3, Home, Music2 } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="flex items-center justify-center mb-6">
        <Disc3 className="h-24 w-24 text-primary animate-spin-slow" />
      </div>
      <h1 className="text-6xl font-bold mb-2 text-center">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Beat Not Found</h2>
      <p className="text-lg text-gray-400 max-w-md text-center mb-8">
        The track you're looking for seems to have dropped off our playlist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary hover:bg-primary">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary">
          <Link href="/beats">
            <Music2 className="mr-2 h-4 w-4" />
            Browse Beats
          </Link>
        </Button>
      </div>
    </div>
  )
}
