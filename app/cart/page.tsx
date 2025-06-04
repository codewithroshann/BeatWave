import React from "react";
import Cart from "@/components/cart/cart";
import { cookies } from 'next/headers';

async function getCart() {
  const cookieStore =await cookies();
  const token = cookieStore.get("token")?.value;
  const response = await fetch("http://localhost:8000/cart",{
    method:"GET",
    headers: {
      Cookie: `token=${token}`
    }
  })
  if(response.ok){
    return await response.json();
  }
}
const page = async () => {
  const data = await getCart();
  const beats = data.beats;
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className={`container px-4 py-12 mx-auto mt-3`}>
          <h1 className="text-4xl font-semibold text-center mb-5">Your Cart</h1>
          <Cart beats={beats}/>
        </div>
      </div>
    </>
  );
};

export default page;
