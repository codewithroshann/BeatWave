"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="flex items-center justify-center mb-6">
        <AlertTriangle className="h-24 w-24 text-red-500" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Something went wrong!</h1>
      <p className="text-lg text-gray-400 max-w-md text-center mb-8">
        Looks like we hit a bad note. Our engineers are working to get the beat back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => reset()} className="bg-red-600 hover:bg-red-700">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Button asChild variant="outline" className="border-red-600 text-red-400 hover:bg-red-950/30">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
