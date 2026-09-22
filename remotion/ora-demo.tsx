"use client"

import { PlayIcon, RotateCcwIcon } from "lucide-react"
import { AbsoluteFill, Audio, Img, staticFile, useCurrentFrame } from "remotion"

import { ORA_DEMO_WAVEFORM_PEAKS } from "./ora-demo-waveform"

export const ORA_DEMO_FPS = 30
export const ORA_DEMO_WIDTH = 760
export const ORA_DEMO_HEIGHT = 520
// Matches the runtime of public/audio/ora-demo.mp3 (141.976s) so the waveform
// and the player's scrubber track the audio to the end without cutting it off
// or looping past it. Re-run `ffprobe -show_entries format=duration
// public/audio/ora-demo.mp3` and update this if the audio file changes.
export const ORA_DEMO_DURATION_IN_FRAMES = 4260

type OraDemoProps = {
  caption: string
  eyebrow: string
  isPlaying: boolean
  isEnded: boolean
  onToggle: () => void
}

export function OraDemo({ caption, eyebrow, isPlaying, isEnded, onToggle }: OraDemoProps) {
  const frame = useCurrentFrame()
  const progress = frame / ORA_DEMO_DURATION_IN_FRAMES

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, var(--secondary) 0%, var(--background) 60%)",
      }}
    >
      <Audio src={staticFile("audio/ora-demo.mp3")} />
      <div
        style={{
          width: "88%",
          height: "82%",
          borderRadius: 24,
          border: "1px solid var(--border)",
          background: "var(--card)",
          boxShadow: "0 20px 60px -15px rgba(15,23,42,0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 28px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <Img src={staticFile("logo.png")} style={{ height: 26, width: "auto" }} />
          <span style={{ fontSize: 13, color: "var(--muted-foreground)", fontWeight: 500 }}>{eyebrow}</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            padding: "0 32px",
          }}
        >
          <h1
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "var(--foreground)",
              margin: 0,
              fontFamily: "var(--font-heading, inherit)",
            }}
          >
            Ora
          </h1>

          <div style={{ position: "relative", width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                height: 64,
                width: "100%",
              }}
            >
              {ORA_DEMO_WAVEFORM_PEAKS.map((peak, i) => {
                const height = 8 + peak * 48
                const barProgress = i / ORA_DEMO_WAVEFORM_PEAKS.length
                const played = barProgress <= progress
                return (
                  <div
                    key={i}
                    style={{
                      width: 5,
                      borderRadius: 3,
                      height,
                      background: played ? "var(--teal)" : "var(--border)",
                    }}
                  />
                )
              })}
            </div>

            <button
              type="button"
              onClick={onToggle}
              aria-label={eyebrow}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                opacity: isPlaying ? 0 : 1,
                pointerEvents: isPlaying ? "none" : "auto",
                transition: "opacity 0.2s ease",
              }}
            >
              <span
                style={{
                  display: "flex",
                  height: 64,
                  width: 64,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  background: "var(--card)",
                  boxShadow: "0 10px 25px -5px rgba(15,23,42,0.35)",
                  color: "var(--foreground)",
                }}
              >
                {isEnded ? (
                  <RotateCcwIcon size={24} />
                ) : (
                  <PlayIcon size={24} style={{ transform: "translateX(2px)" }} fill="currentColor" />
                )}
              </span>
            </button>
          </div>

          <p
            style={{
              fontSize: 15,
              color: "var(--muted-foreground)",
              margin: 0,
              textAlign: "center",
            }}
          >
            {caption}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  )
}
