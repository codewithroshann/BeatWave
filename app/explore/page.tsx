import React from "react";
import Explore from "@/components/explore/explore";
import { FaSearch } from "react-icons/fa";
import { BeatCard } from "@/components/beat-card";

const page = async () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container px-4 py-12 mx-auto mt-5">
          <h1 className="text-4xl font-bold text-center mb-3">
            Browse Best Beats & Samples!
          </h1>
          <p className="text-zinc-400 max-w-[700px] text-center mx-auto font-medium text-lg/7 mb-6">
            Discover and purchase high-quality beats and sound kits for your
            next project. Our platform connects you with talented producers from
            around the world.
          </p>
          <Explore />
          {/* {beats.length == 0 || beats == null ? (
            <Explore />
          ) : (
            <div className="grid mt-5 grid-cols-2 beat-container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 sm:gap-5">
              <div className="my-10">

           { beats
              .reverse()
              .map((beat: any, index: number) => (
                <BeatCard key={index} beat={{ ...beat }} />
              ))}
              </div>
              </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default page;
