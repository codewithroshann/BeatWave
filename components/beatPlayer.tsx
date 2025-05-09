"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Heart, Bookmark, X, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useSelector,useDispatch } from "react-redux"
import {hideMusicPlayer} from '@/redux/slices/musicPlayerReducer'
import { addToCart } from "@/redux/slices/cartReducer"
import { clearAlert, setAlert } from "@/redux/slices/AlertReducer"

interface BeatPlayer{
  id:string
  title:string
  producer:string
  image:string
  audio:string
  playing:boolean
  autoPlay?:boolean
}
export default function BeatPlayer() {
  const dispatch = useDispatch()
  const beats:BeatPlayer = useSelector((state: any) => state.musicPlayer as BeatPlayer)
  const cartBeats = useSelector((state: any) => state.cart.cartItems)
  
  const beat = {
    title: beats.title,
    artist: beats.producer,
    coverImage: beats.image,
    audioSrc: beats.audio,
    playing:beats.playing,
    autoPlay:true

  } 

  const [isPlaying, setIsPlaying] = useState(beat.autoPlay)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [audioError, setAudioError] = useState(false)
  

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)

  // getting audio duration
    useEffect(()=>{
        const audio = new Audio(beats.audio??'')
      const handleLoadedMetadata = () => {       
        setDuration(audio.duration);
      
      };  
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);      
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
    },);
    
  
  // Handle play/pause
  const togglePlay = () => {
    if (audioError) {
      // Simulate playback if audio file is not available
      if (isPlaying) {
        cancelAnimationFrame(animationRef.current!)
      } else {
        simulatePlayback()
      }
      setIsPlaying(!isPlaying)
      return
    }

    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play().catch((err) => {
        console.error("Error playing audio:", err)
        setAudioError(true)
        // Fall back to simulation
        simulatePlayback()
      })
    }
    setIsPlaying(!isPlaying)
  }

  // Format time to MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }


  // Simulate playback when audio file is not available
  const simulatePlayback = () => {
    const startTime = performance.now() - currentTime * 1000

     const updateSimulation = () => {
      const elapsedSeconds = (performance.now() - startTime) / 1000
      if (elapsedSeconds < duration) {
        setCurrentTime(elapsedSeconds)
        animationRef.current = requestAnimationFrame(updateSimulation)
      } else {
        setCurrentTime(duration)
        setIsPlaying(false)
      }
    }
    animationRef.current = requestAnimationFrame(updateSimulation)
  
  }
  // Handle progress bar click/drag
  const handleProgressBarInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width
    const newTime = clickPosition * duration

    setCurrentTime(newTime)
    if (!audioError && audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  // Start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    handleProgressBarInteraction(e)
  }

  // Continue dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleProgressBarInteraction(e)
    }
  }

  // End dragging
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add global mouse up handler to stop dragging even if mouse is released outside the bar
  useEffect(() => {
        const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener("mouseup", handleGlobalMouseUp)
    }

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging])

  // Set up audio event listeners
  useEffect(() => {
    const audio = audioRef.current
         if (!audio) return
    const updateTime = () => setCurrentTime(audio.currentTime)
   
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration)
      }
    }
    const handleEnded = () => setIsPlaying(false)
    const handleError = () => {
      console.warn("Audio error occurred, falling back to simulation")
      setAudioError(true)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  },)

    // Auto-play when component mounts if autoPlay is true
    useEffect(() => {
      if (beat.autoPlay) {
        const playPromise = audioRef.current?.play()
        if (playPromise) {
          playPromise.catch((err) => {
            console.error("Auto-play error:", err)
            setAudioError(true)
            // Fall back to simulation
            simulatePlayback()
          })
        } else if (audioError) {
          // If we already know there's an audio error, simulate playback
          simulatePlayback()
        }
      }
    }, [beat.autoPlay, audioError])
    // Reset state when audio source changes

  useEffect(() => {
    setCurrentTime(0)
    setAudioError(false)

    // If autoPlay is true, attempt to play the new audio
    if (beat.autoPlay) {
      setIsPlaying(true)
    }
  }, [beat.audioSrc, beat.autoPlay])


  const handleAddToCart = (beat: any) => {
    if (cartBeats.find((item: any) => item.id === beat.id)) {
      dispatch(setAlert({ message: "Beat Already Added In Cart!", type: "warning" }))
      setTimeout(() => {
        dispatch(clearAlert())
      }, 3000);

    } else {
      dispatch(addToCart(beat))
      dispatch(setAlert({ message: "Beat Added Successfully In Cart!", type: "success" }))
      setTimeout(() => {
        dispatch(clearAlert())
      }, 3000);
    }
  };
  return (
    <div className={`flex flex-col w-full ${beat.playing==true ?"block":"hidden"}  duration-300 cursor-pointer bg-transparent-white backdrop-blur-lg text-white rounded-md overflow-hidden fixed bottom-0 z-50`}>
      {/* Progress bar at the top */}
      <div
        ref={progressBarRef}
        className="h-1 w-full bg-gray-700 cursor-pointer relative h-2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="absolute top-0 left-0 h-full cursor-pointer bg-primary transition-all duration-100"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      {/* Main player content */}
      <div className="flex items-center justify-between w-full px-2 py-1">
        {beat.audioSrc && <audio ref={audioRef} {...(beat.autoPlay ? {autoPlay:true} : {})}  src={beat.audioSrc} preload="metadata" />}

        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 rounded-full overflow-hidden cursor-pointer music-cover">
            <Image src={beat.coverImage || "/placeholder.svg"} alt={`${beat.title} cover`} fill className={`object-cover animate-${isPlaying==true ?"spin":"none"}`}/>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">{beat.title}</span>
            <span className="text-xs text-gray-400">{beat.artist}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-center mx-3">
          <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>

          <button
            onClick={togglePlay}
            className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white ml-0.5" />}
          </button>

          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>

        <div className="flex items-center gap-4">

        <ShoppingCart className="h-5 w-5" onClick={()=>{handleAddToCart(beats)}}/>

          <button className="text-gray-400 hover:text-white transition-colors" onClick={()=>{dispatch(hideMusicPlayer())}}>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
