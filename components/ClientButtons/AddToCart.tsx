"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { useDispatch } from "react-redux";
const AddToCart = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCart = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL+`/addtocart/${params.id}`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.message) {
        dispatch(setAlert({ message: data.message, type: data.type }));
      }
    }
    if (!response.ok) {
      const errorMsg = await response.json();
      dispatch(
        setAlert({ message: "First Login To Access Cart!", type: "error" })
      );
      if (errorMsg.redirectUrl) {
        router.push(errorMsg.redirectUrl);
      }
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 2500);
  };
  return (
    <>
      <Button className="w-full gap-2 " onClick={handleCart}>
        <ShoppingCart className="h-4 w-4" />
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
