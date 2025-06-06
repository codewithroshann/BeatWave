"use client";
import { Button } from "../ui/button";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";

const DeleteFromCart = ({ beatId }: { beatId: any }) => {
  const dispatch = useDispatch();
  interface DeleteFromCartProps {
    beatId: any; // or you can define it as a specific type, e.g. string, number, etc.
  }
  const removeFromCart = async (id: any) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL+`/removefromcart/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          dispatch(setAlert({ message: data.message, type: data.type }));
        }
        setTimeout(() => {
          dispatch(clearAlert());
          window.location.reload();          
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button
        className="p-2 rounded-md bg-zinc-700 text-center h-[33px] hover:bg-zinc-700/80"
        onClick={() => {
          removeFromCart(beatId);
        }}
      >
        <RiDeleteBinLine />
      </Button>
    </>
  );
};

export default DeleteFromCart;
