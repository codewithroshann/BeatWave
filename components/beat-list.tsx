"use client"

import { useState } from "react"
import { BeatCard } from "@/components/beat-card"

// Mock data for beats
const BEATS = [
  {
    id: "1",
    title: "Night Rider",
    producer: "Metro Boomin",
    genre: "Trap",
    bpm: 145,
    price: 49.99,
    image: "./hero-image.jpg",
    audio: "./audio/Y2meta.app - POP SMOKE - CITY OF GODS feat. Fivio Foreign & Kay Flock (Music Video) (256 kbps).mp3",
  },
  {
    id: "2",
    title: "Sunset Boulevard",
    producer: "Mike Will",
    genre: "Hip Hop",
    bpm: 90,
    price: 39.99,
   image: "./hero-image.jpg",
    audio: "./audio/Y2meta.app - POP SMOKE - LIFESTYLE feat. Fivio Foreign (Music Video) (256 kbps).mp3",
  },
  {
    id: "3",
    title: "Cloudy Memories",
    producer: "J Dilla",
    genre: "Lo-Fi",
    bpm: 85,
    price: 59.99,
   image: "./hero-image.jpg",
    audio: "./audio/Y2meta.app - Pop Smoke - Move ft. Trippie Redd, Juice WRLD & XXXTENTACION (Music Video) [Prod.by Nakvi!] (256 kbps).mp3",
  },
  {
    id: "4",
    title: "Electric Vibrations",
    producer: "Timbaland",
    genre: "R&B",
    bpm: 100,
    price: 44.99,
   image: "./hero-image.jpg",
    audio: "./audio/Y2meta.app - Pop Smoke - Move Hot ft. Fivio Foreign & Juice WRLD (Music Video) [Prod.by Nakvi!] (256 kbps).mp3",
  },
  {
    id: "5",
    title: "Dark Alley",
    producer: "Dr. Dre",
    genre: "West Coast",
    bpm: 92,
    price: 69.99,
   image: "./hero-image.jpg",
    audio: "./audio/Y2meta.app - Pop Smoke - Shootin' ft. Juice WRLD, Fivio Foreign, Lil Tjay (Music Video) [Prod.by Nakvi!] (256 kbps).mp3",
  },
  {
    id: "6",
    title: "Summer Breeze",
    producer: "Pharrell",
    genre: "Pop",
    bpm: 110,
    price: 49.99,
   image: "./hero-image.jpg",
    audio: "./audio/Y2meta.app - Pop Smoke - Walk In Street ft. Polo G, Juice WRLD & Lil Tjay (Music Video) [Prod. by Nakvi!] (256 kbps).mp3",
  },
]

export function BeatList() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
  
  const handlePlayPause = (beatId: string) => {
    if (currentlyPlaying === beatId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(beatId)
    }
   
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {BEATS.map((beat) => (
        <BeatCard
          key={beat.id}
          beat={beat}
          isBeatPlaying={currentlyPlaying === beat.id}
          onPlayPause={() => handlePlayPause(beat.id)}
        />
      ))}
    </div>
  )
}
