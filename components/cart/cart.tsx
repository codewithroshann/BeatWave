"use client";
import Image from "next/image";
import HeroImage from "@/public/hero-image.jpg";
import { RiDeleteBinLine } from "react-icons/ri";

import { FaRupeeSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import DeleteFromCart from "../ClientButtons/DeleteFromCart";
import { useEffect, useState } from "react";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { clearCart } from "@/redux/slices/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { load } from "@cashfreepayments/cashfree-js";
function getTotalCartPrice(beats: any[] | undefined): number {
  if (!Array.isArray(beats)) return 0;

  return beats
    .map((item) =>
      parseFloat((item?.price ?? "0").toString().replace(/,/g, ""))
    )
    .reduce((prev, curr) => prev + curr, 0);
}
interface CartProps {
  getCart: any;
}

const cart = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/cart`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          }
        );
        if (response.ok) {
          const res = await response.json();
          setData(res);
        }
        return { beats: [] };
      } catch (error) {
        console.log(error);
      }
    };

    getCart();
  }, []);
  const { beats }: any = data;
  const cartBeats = beats?.beats;
  const itemsId = cartBeats?.map((item: any) => item._id);
  if (!beats || !cartBeats || cartBeats.length === 0) {
    return (
      <div className="text-center text-white/20 duration-100 flex items-center justify-center h-[500px] text-3xl sm:text-6xl mt-8 font-bold">
        Empty Cart <FaShoppingCart />
      </div>
    );
  }
  const cartPrice = getTotalCartPrice(cartBeats);

  //Cashfree payment configration
  let cashfree: any;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  initializeSDK();

  const getSessionId = async (price: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/payment`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userData, price }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        if (data.payment_session_id) {
          return {
            sessionId: data.payment_session_id,
            orderId: data.order_id,
          };
        }
        if (!res.ok) {
          const data = await res.json();
          if (data.message && data.redirectUrl) {
            dispatch(setAlert({ message: data.message, type: data.type }));
            setTimeout(() => {
              dispatch(clearAlert());
              router.push(data.redirectUrl);
            }, 2500);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const verifyPayment = async (orderId: any, itemsId: any) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ orderId, itemsId }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        dispatch(clearCart());
        router.push(data.redirectUrl);
      }
      if (!res.ok) {
        const data = await res.json();
        dispatch(setAlert({ message: data.message, type: data.type }));
      }
      setTimeout(() => {
        dispatch(clearAlert());
      }, 2500);
    } catch (error) {
      console.error("Network or server error:", error);
    }
  };

  const handleClick = async (price: number, itemsId: any) => {
    try {
      let session = await getSessionId(price);
      console.log(session)
      if (!session) return;
      const { sessionId, orderId } = session;
      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };
      await cashfree.checkout(checkoutOptions);
      await verifyPayment(orderId, itemsId);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="flex flex-col gap-3 flex-1">
          {Array.isArray(cartBeats) &&
            cartBeats.reverse().map((beat: any, key) => (
              <div className="flex flex-col p-3 border rounded-md" key={key}>
                <div className="flex justify-between aligns-center gap-3 mb-3 ">
                  <h3 className="text-md ml-2 font-semibold">{beat.title}</h3>
                  <DeleteFromCart beatId={beat._id} />
                </div>
                <div className="flex p-3 flex-wrap border rounded-md">
                  <div className="min-h-[100px] h-[100px] mb-2 ">
                    <Image
                      src={`${beat.thumbnail}`}
                      alt="image"
                      height={100}
                      width={150}
                      className="rounded-lg h-[100px]"
                    />
                  </div>
                  <div className="beat-info  ml-4">
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <b className="text-primary text-sm">Beat Producer : </b>{" "}
                      <span className="text-sm ml-2">{beat.producer}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <b className="text-primary text-sm">Audio File: </b>{" "}
                      <span className="text-sm ml-2">{beat.file}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <b className="text-primary text-sm">Lisence Type : </b>{" "}
                      <span className="text-sm ml-2">Free For Profit</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 items-center">
                      <b className="text-primary text-sm">Price : </b>{" "}
                      <span className="text-sm ml-2 flex items-center">
                        <FaRupeeSign className="text-xs" />
                        {beat.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-full md:max-w-[450px] sticky top-20  border rounded-md p-3 flex-1 h-fit">
          <h3 className="text-3xl font-semibold mb-5"> Order Summary</h3>
          <div className="grid grid-cols-2 ">
            <b className="">Sub-Total :</b>
            <span className="flex items-center">
              {" "}
              <FaRupeeSign className="text-xs" />
              {cartPrice.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-2 ">
            <b className="">Convenience Fee :</b>
            <span className="flex items-center">
              {" "}
              <FaRupeeSign className="text-xs" />
              0.00
            </span>
          </div>
          <div className="grid grid-cols-2 ">
            <b className="">Discount :</b>
            <span className="flex items-center">
              {" "}
              <FaRupeeSign className="text-xs" />
              0.00
            </span>
          </div>
          <div className="p-3 grid grid-cols-2 border rounded-sm mt-5">
            <h3 className="text-2xl font-bold text-primary">Total: </h3>{" "}
            <span className="flex items-center text-xl">
              <FaRupeeSign className="text-md" />
              {cartPrice.toLocaleString()}
            </span>
          </div>

          <Button
            className="bg-white hover:bg-white/80 duration-100  text-black p-2 mt-3 rounded-sm w-full"
            onClick={() => handleClick(cartPrice, itemsId)}
          >
            Pay
            <span className="font-bold ml-2">{cartPrice.toLocaleString()}</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default cart;
