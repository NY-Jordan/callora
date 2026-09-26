"use client"

import { createContext, useCallback, useContext, useState } from "react"

import { BrowserTestCallDialog } from "./browser-test-call-dialog"

type BrowserCallContextValue = {
  openCall: () => void
  callEnabled: boolean
}

// Toggles every "Try Ora" button at build time. Set NEXT_PUBLIC_TEST_CALL_ENABLED
// to "true" to enable the live test call; any other value (or unset) disables it.
const callEnabled = process.env.NEXT_PUBLIC_TEST_CALL_ENABLED === "true"

const BrowserCallContext = createContext<BrowserCallContextValue | null>(null)

// Renders the live-call dialog once at the app root so any "Try Ora" button
// anywhere on the page (navbar, hero, final CTA, call demo) can trigger the
// exact same real Telnyx call instead of just scrolling to a section.
export function BrowserCallProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openCall = useCallback(() => {
    if (callEnabled) setOpen(true)
  }, [])

  return (
    <BrowserCallContext.Provider value={{ openCall, callEnabled }}>
      {children}
      {callEnabled && <BrowserTestCallDialog open={open} onOpenChange={setOpen} />}
    </BrowserCallContext.Provider>
  )
}

export function useBrowserCall() {
  const ctx = useContext(BrowserCallContext)
  if (!ctx) throw new Error("useBrowserCall must be used within a BrowserCallProvider")
  return ctx
}
