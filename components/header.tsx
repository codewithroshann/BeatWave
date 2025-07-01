"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, ShoppingCart, Menu, X, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/public/favicons/android-chrome-512x512.png";
import { GoKey } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { LuUserPen } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { userData, userLogedOut } from "@/redux/slices/AuthReducer";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [open, setOpen] = useState("hidden");
  const [islogedIn, setIsLogedIn] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const data = useSelector((state: any) => state.auth.user);
  const cart = useSelector((state: any) => state.cart.cart);
  const panelOpen = () => {
    if (open == "hidden") {
      setOpen("block");
    } else {
      setOpen("hidden");
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/check-auth",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();

        if (data.isLogedIn === true) {
          dispatch(userData(data.user));
          setIsLogedIn(data.isLogedIn);
        } else {
          setIsLogedIn(data.isLogedIn);
          console.log("No User Found!");
        }
      }
    };

    // const interval = setInterval(() => {
    // }, 2000);
    checkAuth();

    // return () => clearInterval(interval);
  }, []);

  const logOut = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/user/logout",
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setIsLogedIn(data.isLogedIn);
      dispatch(setAlert({ message: "Logout Successfully!", type: "success" }));
      dispatch(userLogedOut());
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      const errorMsg = await response.json();
      dispatch(setAlert({ message: errorMsg.message, type: "error" }));
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 2500);
  };

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
                <Link
                  href="/"
                  className="text-base font-medium transition-colors px-2 hover:bg-zinc-500/50"
                >
                  Home
                </Link>
                <Link
                  href="/explore"
                  className="text-base font-medium transition-colors px-2 hover:bg-zinc-500/50"
                >
                  Explore
                </Link>
                <Link
                  href="/trending"
                  className="text-base font-medium transition-colors px-2  hover:bg-zinc-500/50"
                >
                  Trending
                </Link>
                <Link
                  href="/cart"
                  className="text-base font-medium transition-colors px-2 hover:bg-zinc-500/50"
                >
                  Cart
                </Link>
                {data?.role === "admin" ? (
                  <Link
                    href="/auth/admin/controlpanel"
                    className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-zinc-500/50 "
                  >
                    Control Panel
                  </Link>
                ) : (
                  ""
                )}
                <Link
                  href="/account"
                  className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-zinc-500/50 "
                >
                  Account
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <img
              src={Logo.src}
              alt=""
              className="hidden md:inline-block h-9 w-9  rounded-full"
            />
            <span className="font-bold text-xl">BeatWave</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-zinc-500/50"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-zinc-500/50"
          >
            Explore
          </Link>
          <Link
            href="/trending"
            className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-zinc-500/50 "
          >
            Trending
          </Link>
          {data?.role === "admin" ? (
            <Link
              href="/auth/admin/controlpanel"
              className="text-sm font-medium transition-colors px-3 py-1 rounded-sm hover:bg-zinc-500/50 "
            >
              Control Panel
            </Link>
          ) : (
            ""
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search beats..."
                className="w-[200px] md:w-[300px] rounded-r-none focus-visible:ring-0"
              />
              <Button
                variant="outline"
                size="icon"
                className="rounded-l-none border-l-0"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="ml-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )} */}
          {islogedIn == true ? (
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <span
                  className={`absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white
                   ${
                    cart.length == 0 ? "" : "bg-red-500"
                   }  top-[1px] right-0 rounded-full`}
                >
                  {cart.length == 0 ? "" : cart.length}
                </span>
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          ) : (
            ""
          )}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={panelOpen}
          >
            <User className="h-5 w-5" />
            {islogedIn == false ? (
              <div
                className={`flex  flex-col absolute bottom-[-100px] bg-zinc-800 rounded-md w-[120px] py-2 px-3 right-[10px]  ${open}`}
              >
                <Link
                  href="/auth/user/login"
                  className="p-2 text-mb flex  duration-100 rounded-md hover:bg-zinc-700/50 items-center gap-2"
                >
                  <GoKey className="text-xs " />
                  Login
                </Link>
                <Link
                  href="/auth/user/signup"
                  className="p-2 text-mb  duration-100 rounded-md hover:bg-zinc-700/50 flex items-center gap-2"
                >
                  {" "}
                  <FiUserPlus />
                  SignUp
                </Link>
              </div>
            ) : (
              <div
                className={`flex  flex-col absolute bottom-[-100px] bg-zinc-800 rounded-md h-[max-content] w-[150px] py-2 px-3 right-[10px] top-[50px]  ${open}`}
              >
                <Link
                  href="/account"
                  className="p-2  text-mb duration-100 rounded-md hover:bg-zinc-700/50 flex items-center gap-2"
                >
                  {" "}
                  <LuUserPen className="text-xs" />
                  Account
                </Link>
                <Link
                  href="/mypurchase"
                  className="p-2  text-mb duration-100 rounded-md hover:bg-zinc-700/50 flex items-center gap-2"
                >
                  {" "}
                  <ShoppingBag className="text-xs" />
                  My Purchase
                </Link>
                <Button
                  onClick={logOut}
                  className="p-2 text-mb duration-100 rounded-md text-start hover:bg-zinc-700/50 bg-zinc-800 flex gap-2 justify-start items-center"
                >
                  <IoIosLogOut className="text-xs" />
                  Logout
                </Button>
              </div>
            )}

            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
