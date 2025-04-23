"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
}

export default function Marquee({
  children,
  className,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  ...props
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth)
    }
  }, [children])

  return (
    <div className={cn("relative show-case overflow-hidden w-full cursor-pointer", className)} {...props}>
      <div
        className={cn("flex whitespace-nowrap", pauseOnHover && "hover:[animation-play-state:paused]")}
        style={{
          animation: `marquee ${contentWidth / speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        <div ref={contentRef} className="flex items-center">
          {children}
        </div>
        <div aria-hidden="true" className="flex items-center">
          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
