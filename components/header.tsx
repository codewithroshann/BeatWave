"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/" className="text-base font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/explore" className="text-base font-medium transition-colors hover:text-primary">
                  Explore
                </Link>
                <Link href="/trending" className="text-base font-medium transition-colors hover:text-primary">
                  Trending
                </Link>
                <Link href="/auth/admin/ControlPanel" className="text-base font-medium transition-colors hover:text-primary">
                  Control Panel
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <img src="../favicons/apple-touch-icon.png" alt=""className="hidden md:inline-block h-9 w-9  rounded-full" />
            <span className="font-bold text-xl">BeatWave</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium transition-colors hover:text-primary">
            Explore
          </Link>
          <Link href="/trending" className="text-sm font-medium transition-colors hover:text-primary">
            Trending
          </Link>
          <Link href="/auth/admin/controlpanel" className="text-sm font-medium transition-colors hover:text-primary">
                  Control Panel
                </Link>
        </nav>
        

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search beats..."
                className="w-[200px] md:w-[300px] rounded-r-none focus-visible:ring-0"
              />
              <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
