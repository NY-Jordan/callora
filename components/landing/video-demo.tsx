"use client"

import { useEffect, useRef, useState } from "react"
import { Player, type PlayerRef } from "@remotion/player"
import { motion } from "framer-motion"

import {
  ORA_DEMO_DURATION_IN_FRAMES,
  ORA_DEMO_FPS,
  ORA_DEMO_HEIGHT,
  ORA_DEMO_WIDTH,
  OraDemo,
} from "@/remotion/ora-demo"

import { useLanguage } from "./language-provider"

export function VideoDemo() {
  const { t } = useLanguage()
  const playerRef = useRef<PlayerRef>(null)
  const [state, setState] = useState<"idle" | "playing" | "ended">("idle")

  useEffect(() => {
    const player = playerRef.current
    if (!player) return

    const onPlay = () => setState("playing")
    const onPause = () => setState((prev) => (prev === "ended" ? prev : "idle"))
    const onEnded = () => setState("ended")

    player.addEventListener("play", onPlay)
    player.addEventListener("pause", onPause)
    player.addEventListener("ended", onEnded)

    return () => {
      player.removeEventListener("play", onPlay)
      player.removeEventListener("pause", onPause)
      player.removeEventListener("ended", onEnded)
    }
  }, [])

  const handleToggle = () => {
    const player = playerRef.current
    if (!player) return
    if (state === "ended") {
      player.seekTo(0)
    }
    player.play()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative w-full max-w-[480px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal/25 via-transparent to-brand/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
        <Player
          ref={playerRef}
          component={OraDemo}
          inputProps={{
            caption: t.videoDemo.caption,
            eyebrow: t.videoDemo.eyebrow,
            isPlaying: state === "playing",
            isEnded: state === "ended",
            onToggle: handleToggle,
          }}
          durationInFrames={ORA_DEMO_DURATION_IN_FRAMES}
          compositionWidth={ORA_DEMO_WIDTH}
          compositionHeight={ORA_DEMO_HEIGHT}
          fps={ORA_DEMO_FPS}
          style={{ width: "100%", aspectRatio: `${ORA_DEMO_WIDTH} / ${ORA_DEMO_HEIGHT}` }}
          controls
          showVolumeControls
          clickToPlay={false}
          spaceKeyToPlayOrPause
          allowFullscreen={false}
          doubleClickToFullscreen={false}
          loop={false}
        />
      </div>
    </motion.div>
  )
}
