import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BeatCard } from "@/components/beat-card";

const getBeats = async (genre: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/explore/genre/${genre}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }: any) => {
  const genre  = decodeURIComponent(await params.genre);
  const {beats} = await  getBeats(genre);
if(!beats||beats.length==0)return  <div className="text-center text-white/20 duration-100 flex items-center justify-center h-[500px] text-6xl mt-8 font-bold">Beat Not Found!</div>


  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container px-4 py-12 mx-auto mt-3">
          <h1 className="font-bold text-4xl  text-center mb-3 capitalize">
            {genre} Beats.
          </h1>
          <p className="text-zinc-400 max-w-[800px] text-center mx-auto font-medium text-md mb-6">
            Discover the best <span className="capitalize">{genre}</span> Beats at BeatWave. Our exclusive collection
            of Trap beats are perfect for freestyle rappers looking to elevate
            their sound. Easily browse, preview, and download high-quality Trap
            beats tailored to your style. Whether you're producing a new hit or
            searching for the perfect Trap beat download, BeatWave has you
            covered. Explore our curated selection today and find the beats that
            will make your music stand out.
          </p>
          <Link
            href={"/explore"}
            className="mx-auto w-36 h-8 mb-5 flex gap-1 rounded-lg items-center justify-center border-2 border-zinc-800 text-primary "
          >
            <X className="h-5 w-5 text-sm" /> Clear Filter
          </Link>

          <div className="grid grid-cols-2 beat-container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 sm:gap-5">
          {beats.reverse().map((beat:any)=>{return <BeatCard key={beat._id} beat={beat} />}) }
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
