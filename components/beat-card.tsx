"Use Client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, ShoppingCart, Headphones } from "lucide-react"
import { FaRupeeSign } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React, { useRef } from "react"
import { UseSelector,useDispatch } from "react-redux";
import {addToCart} from "@/redux/slices/cartReducer"  

interface Beat {
  id: string
  title: string
  producer: string
  genre: string
  bpm: number
  price: number
  image: string
  audio: string
  count:number
}

interface BeatCardProps {
  beat: Beat
  isBeatPlaying: boolean
  onPlayPause: () => void

}

export function BeatCard({ beat,isBeatPlaying }: BeatCardProps) {

  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
 const [w,setW]= useState<string | null>(null)

const dispatch = useDispatch();

  const handlePlay = (id: string) => {  
   
    // If a song is already playing and it's not the current one, pause it
    if (isPlaying && isPlaying !== null) {
      const previousAudio = audioRef.current[isPlaying];
      if (previousAudio) {
        previousAudio.pause();
        previousAudio.currentTime = 0; // Reset the playback position
      }
    }

    const currentAudio = audioRef.current[id];

    if (currentAudio) {
      if (isPlaying === id) {
        // If the same song is clicked, toggle pause
        currentAudio.pause();
        setIsPlaying(null); // Reset the state
      } else {
        // Otherwise, play the new song
        currentAudio.play();
        setIsPlaying(id); // Update the state to the new song's ID
      }
    }
  };

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={beat.image || "/placeholder.svg"}
          alt={beat.title}
          fill
        />
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <Button
            className="rounded-full w-16 h-16"
            onClick={() => handlePlay(beat.id)}
            aria-label={isPlaying ? "Pause beat" : "Play beat"}
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{beat.title}</h3>
            <p className="text-muted-foreground">{beat.producer}</p>
          </div>
          <Badge variant="outline">{beat.genre}</Badge>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="bg-muted px-2 py-1 rounded text-xs">{beat.bpm} BPM</div>
          <audio preload="auto" ref={(el) => {
            (audioRef.current[beat.id] = el)
          }} src={beat.audio}></audio>
          {/* <div className="flex items-center text-xs text-muted-foreground">
            <Headphones className="h-3 w-3 mr-1" />
            14.2K
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row sm:items-center sm:gap-2  justify-between items-start gap-4 ">
        <div className="font-bold flex items-center "><FaRupeeSign className="text-sm inline"/>{beat.price}</div>
        <Button size="sm" className="gap-1" onClick={()=>dispatch(addToCart(beat))}> 
          <ShoppingCart className="h-4 w-4 " />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
