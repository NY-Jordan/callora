"use client"

import { useCallback, useEffect, useState } from "react"

/**
 * Client-side deterrent against spam-clicking the public "Test Ora live"
 * button — every attempt opens a real, unauthenticated Telnyx AI Assistant
 * call, which costs money regardless of whether the visitor stays on it.
 *
 * This is NOT a security boundary: it's keyed on localStorage, so clearing
 * storage, incognito, or another browser/device resets it. It only stops
 * casual repeated clicking from a single browser session. Real abuse
 * protection (bots, scripted floods) needs a server-side gatekeeper (e.g. a
 * Route Handler backed by Vercel KV/Upstash, rate-limited by IP).
 */
const STORAGE_KEY = "callora-last-test-call"
export const CALL_COOLDOWN_MS = 2 * 60 * 1000 // 2 minutes between call attempts

export function useCallCooldown() {
  const [remainingMs, setRemainingMs] = useState(0)

  const computeRemaining = useCallback(() => {
    if (typeof window === "undefined") return 0
    const last = Number(window.localStorage.getItem(STORAGE_KEY) ?? 0)
    return Math.max(0, last + CALL_COOLDOWN_MS - Date.now())
  }, [])

  useEffect(() => {
    // Deferred via setTimeout so the initial read (which can differ from the
    // server-rendered 0 once localStorage is available) doesn't set state
    // synchronously within the effect body.
    const tick = () => setRemainingMs(computeRemaining())
    const initial = setTimeout(tick, 0)
    const interval = setInterval(tick, 1000)
    return () => {
      clearTimeout(initial)
      clearInterval(interval)
    }
  }, [computeRemaining])

  const markCallStarted = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
    setRemainingMs(CALL_COOLDOWN_MS)
  }, [])

  return {
    canCall: remainingMs <= 0,
    remainingSeconds: Math.ceil(remainingMs / 1000),
    markCallStarted,
  }
}
