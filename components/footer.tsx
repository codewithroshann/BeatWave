import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Headphones, Mail } from "lucide-react"
import Logo from "@/public/favicons/android-chrome-512x512.png"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
            <img src={Logo.src} alt=""className="hidden md:inline-block h-9 w-9  rounded-full" />
              <span className="font-bold text-xl">BeatWave</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The ultimate marketplace for producers and artists to buy and sell high-quality beats.
            </p>
            <div className="flex mt-6 space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">Youtube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Quick Links</h3>
            <nav className="flex flex-col mt-4 space-y-2 text-sm">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <Link href="/explore" className="hover:text-primary">
                Explore
              </Link>
              <Link href="/trending" className="hover:text-primary">
                Trending
              </Link>
                   
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium">Information</h3>
            <nav className="flex flex-col mt-4 space-y-2 text-sm">
              <Link href="#" className="hover:text-primary">
                About Us
              </Link>
              <Link href="#" className="hover:text-primary">
                License Information
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium">Subscribe</h3>
            <p className="mt-4 text-sm text-muted-foreground">Get updates on new beats and exclusive offers.</p>
            <form className="mt-4">
              <div className="flex max-w-md flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="rounded-md" />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
            <div className="mt-6">
              <div className="flex items-center text-sm">
                <Headphones className="mr-2 h-4 w-4" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <Mail className="mr-2 h-4 w-4" />
                <span>support@beatwave.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} BeatWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
