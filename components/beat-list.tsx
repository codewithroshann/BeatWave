"use client"
import React, { useEffect, useState } from 'react'
import { BeatCard } from "@/components/beat-card";
import Loading from "@/app/loading";



const BeatList =({ count }: { count?: number }) => {
  const [BEATS,setBEATS] = useState([])
  const [currentlyPlaying,setCurrentlyPlaying] = useState<string | null>(null)

    useEffect(() => {
    const getBeats = async () => {
      try {
        const response = await fetch("http://localhost:8000/explore", {
          method: "GET",
          cache: "no-store",
        });
        if (response.ok) {
          const data = await response.json();
          setBEATS(data.beats);
        }

        if (!response.ok) {
          const errorMsg = await response.json();
          console.log(errorMsg.message);
        }
      } catch (error) {
        console.error("Failed to fetch beats", error);
      }
    };
    getBeats();
  }, []);

  // const handlePlayPause = (beatId: string) => {
  //   if (currentlyPlaying === beatId) {
  //     setCurrentlyPlaying(null)
  //   } else {
  //     setCurrentlyPlaying(beatId)
  //   }}
  return (
<>
<div className="grid grid-cols-2 beat-container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 sm:gap-5">
        {!BEATS ? (
          <Loading />
        ) : (
          BEATS.slice(0, count)
            .reverse()
            .map((beat: any, index: number) => (
              <BeatCard key={index} beat={{ ...beat, count }} />
            ))
        )}
      </div>
</>
  )
}

export default BeatList
