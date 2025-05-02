"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import { useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/public/favicons/android-chrome-512x512.png"


export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const[open,setOpen]=useState("hidden")
  
  const beats = useSelector((state: any) => state.cart.cartItems);
 

  const panelOpen=()=>{
    if(open=="hidden"){
    setOpen("block")
    }else{
      setOpen("hidden")
    }
  }

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
                <Link href="/cart" className="text-base font-medium transition-colors hover:text-primary">
                  Cart
                </Link>
                <Link href="/auth/admin/ControlPanel" className="text-base font-medium transition-colors hover:text-primary">
                  Control Panel
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <img src={Logo.src} alt=""className="hidden md:inline-block h-9 w-9  rounded-full" />
            <span className="font-bold text-xl">BeatWave</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-primary/80">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-primary/80">
            Explore
          </Link>
          <Link href="/trending" className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-primary/80 ">
            Trending
          </Link>
          <Link href="/auth/admin/controlpanel" className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-primary/80 ">
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
<a href="/cart">
          <Button variant="ghost" size="icon" className="relative">
            <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white  top-[-3px] right-[-5px] rounded-full">{beats.length==0?"":beats.length}</span>
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
</a>

          <Button variant="ghost" size="icon" className="relative" onClick={panelOpen}>
            <User className="h-5 w-5" />
            <div className={`flex  flex-col absolute bottom-[-100px] bg-zinc-800 rounded-md w-[100px] py-2 px-3 right-[2px]  ${open}`}>
            <a href="/auth/user/login" className="p-2 text-mb">Login</a>
            <a href="/auth/user/signup" className="p-2 text-mb border-t-2 border-primary">SignUp</a>

            </div>
              
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
