import Image from "next/image";
import HeroImage from "@/public/hero-image.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import DeleteFromCart from "../ClientButtons/DeleteFromCart";
interface CartProps {
  beats: { beats: any[] };
}

const cart = ({ beats }: CartProps) => {
  const cartBeats = beats?.beats;

  if (cartBeats.length === 0||!cartBeats) {
    return (
      <div className="text-center text-white/20 duration-100 flex items-center justify-center h-[500px] text-6xl mt-8 font-bold">
        Empty Cart <FaShoppingCart />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-full md:flex-row gap-5 mt-5">
        <div className="flex flex-col gap-3 flex-1">
          {Array.isArray(cartBeats) &&
            cartBeats.reverse().map((beat: any, key) => (
              <div className="flex flex-col p-3 border rounded-md" key={key}>
                <div className="flex justify-between aligns-center gap-3 mb-3 ">
                  <h3 className="text-md ml-2 font-semibold">{beat.title}</h3>
                  <DeleteFromCart beatId={beat._id} />
                </div>
                <div className="flex p-3 flex-wrap border rounded-md">
                  <div className="min-h-[100px] h-[100px] ">
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
              {Array.isArray(cartBeats) &&
                cartBeats
                  .map((item: any) =>
                    parseFloat(
                      (item?.price ?? "0").toString().replace(/,/g, "")
                    )
                  )
                  .reduce((prev: number, curr: number) => prev + curr, 0)
                  .toLocaleString()}
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
              {Array.isArray(cartBeats) &&
                cartBeats
                  .map((item: any) =>
                    parseFloat(
                      (item?.price ?? "0").toString().replace(/,/g, "")
                    )
                  )
                  .reduce((prev, curr) => prev + curr, 0)
                  .toLocaleString()}
            </span>
          </div>

          <Button className="bg-white hover:bg-white/80 duration-100  text-black p-2 mt-3 rounded-sm w-full">
            Pay
            <span className="font-bold ml-2">
              {Array.isArray(cartBeats) &&
                cartBeats
                  .map((item: any) =>
                    parseFloat(
                      (item?.price ?? "0").toString().replace(/,/g, "")
                    )
                  )
                  .reduce((prev, curr) => prev + curr, 0)
                  .toLocaleString()}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default cart;
