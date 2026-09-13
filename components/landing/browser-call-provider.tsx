"use client"

import { createContext, useCallback, useContext, useState } from "react"

import { useCallCooldown } from "@/lib/call-cooldown"

import { BrowserTestCallDialog } from "./browser-test-call-dialog"

type BrowserCallContextValue = {
  openCall: () => void
  canCall: boolean
  remainingSeconds: number
}

const BrowserCallContext = createContext<BrowserCallContextValue | null>(null)

// Renders the live-call dialog once at the app root so any "Try Ora" button
// anywhere on the page (navbar, hero, final CTA, call demo) can trigger the
// exact same real Telnyx call instead of just scrolling to a section.
export function BrowserCallProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const { canCall, remainingSeconds } = useCallCooldown()
  const openCall = useCallback(() => setOpen(true), [])

  return (
    <BrowserCallContext.Provider value={{ openCall, canCall, remainingSeconds }}>
      {children}
      <BrowserTestCallDialog open={open} onOpenChange={setOpen} />
    </BrowserCallContext.Provider>
  )
}

export function useBrowserCall() {
  const ctx = useContext(BrowserCallContext)
  if (!ctx) throw new Error("useBrowserCall must be used within a BrowserCallProvider")
  return ctx
}
