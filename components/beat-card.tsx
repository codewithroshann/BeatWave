"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, ShoppingCart, Headphones } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { playing, hideMusicPlayer } from "@/redux/slices/musicPlayerReducer";
import { useRouter } from "next/navigation";

interface Beat {
  _id: string;
  title: string;
  producer: string;
  genre: string;
  bpm: number;
  price: number;
  thumbnail: string;
  audio: string;
  count: number;
}

interface BeatCardProps {
  beat: Beat;
}

export function BeatCard({ beat }: BeatCardProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const beats = useSelector((state: any) => state.cart.cartItems);

  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (beat: any) => {
    dispatch(playing(beat));
    // if (playingId === beat._id) {
    //   setPlayingId(null);
           
    // } else {
    //   setPlayingId(beat._id);
    // }
  };

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={beat.thumbnail || "/placeholder.svg"}
          alt={beat.title}
          fill
        />
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            className="rounded-full w-16 h-16"
            onClick={() => togglePlay(beat)}
            aria-label={playingId ? "Pause beat" : "Play beat"}
          >
            {playingId === beat._id ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      <CardContent className="p-4 mb-3">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-md">{beat.title.slice(0, 50)}</h3>
            <p className="text-muted-foreground text-sm mt-1">
              {beat.producer}
            </p>
          </div>
          <Badge variant="outline" className="uppercase">
            {beat.genre}
          </Badge>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="bg-muted px-2 py-1 rounded text-xs">
            {beat.bpm} BPM
          </div>
          <audio
            preload="auto"
            ref={(el) => {
              audioRef.current[beat._id] = el;
            }}
            src={beat.audio}
          ></audio>
          {/* <div className="flex items-center text-xs text-muted-foreground">
            <Headphones className="h-3 w-3 mr-1" />
            14.2K
          </div> */}
        </div>
      </CardContent>
      <CardFooter className=" w-full p-4 pt-0 flex flex-col sm:flex-row sm:items-center sm:gap-2  justify-between items-start gap-4 ">
        <div className="font-bold flex items-center ">
          <FaRupeeSign className="text-sm inline" />
          {beat.price}
        </div>
        <Button
          size="sm"
          className="gap-1"
          onClick={() => router.push(`/beat/${beat._id}`)}
        >
          <ShoppingCart className="h-4 w-4 " />
          Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
