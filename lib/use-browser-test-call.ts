"use client"

import * as React from "react"
import type { Call, INotification, TelnyxRTC } from "@telnyx/webrtc"

import { useLanguage } from "@/components/landing/language-provider"

export type BrowserCallStatus = "idle" | "connecting" | "ringing" | "active" | "ended" | "error"

export const REMOTE_AUDIO_ELEMENT_ID = "browser-test-call-audio"

const ACTIVE_STATES = new Set(["active"])
const ENDED_STATES = new Set(["hangup", "destroy", "purge"])
const CONNECT_TIMEOUT_MS = 20_000

/**
 * Talks to Callora's demo Telnyx AI Assistant ("Ora") straight from the browser mic, over
 * WebRTC — no phone call, no backend token. Mirrors the dashboard's "Test in browser" feature
 * (app.callora's use-browser-test-call.ts) but points at the fixed public demo assistant instead
 * of a signed-in clinic's own receptionist. Relies on that assistant having
 * `telephony_settings.supports_unauthenticated_web_calls` enabled so TelnyxRTC's
 * `anonymous_login` can reach it directly with just its public assistant id.
 */
export function useBrowserTestCall(assistantId: string | null) {
  const { t } = useLanguage()
  const [status, setStatus] = React.useState<BrowserCallStatus>("idle")
  const [error, setError] = React.useState<string | null>(null)
  const [muted, setMuted] = React.useState(false)
  const clientRef = React.useRef<TelnyxRTC | null>(null)
  const callRef = React.useRef<Call | null>(null)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearConnectTimeout = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const cleanup = React.useCallback(() => {
    clearConnectTimeout()
    callRef.current?.hangup().catch(() => {})
    clientRef.current?.disconnect().catch(() => {})
    callRef.current = null
    clientRef.current = null
  }, [clearConnectTimeout])

  const fail = React.useCallback(
    (message: string) => {
      setError(message)
      setStatus("error")
      cleanup()
    },
    [cleanup]
  )

  const start = React.useCallback(async () => {
    if (!assistantId) {
      setError(t.browserTest.notSyncedError)
      setStatus("error")
      return
    }

    setError(null)
    setMuted(false)
    setStatus("connecting")

    try {
      const { TelnyxRTC: TelnyxRTCConstructor, NOTIFICATION_TYPE } = await import("@telnyx/webrtc")

      const client = new TelnyxRTCConstructor({
        anonymous_login: { target_type: "ai_assistant", target_id: assistantId },
      })
      clientRef.current = client

      timeoutRef.current = setTimeout(() => {
        fail(t.browserTest.connectFailedError)
      }, CONNECT_TIMEOUT_MS)

      client.on("telnyx.ready", () => {
        callRef.current = client.newCall({
          destinationNumber: "",
          remoteElement: REMOTE_AUDIO_ELEMENT_ID,
        })
        setStatus("ringing")
      })

      client.on("telnyx.notification", (notification: INotification) => {
        if (notification.type === NOTIFICATION_TYPE.userMediaError) {
          fail(t.browserTest.micError)
          return
        }

        if (notification.type !== NOTIFICATION_TYPE.callUpdate) return

        const state = notification.call?.state
        if (!state) return

        if (ACTIVE_STATES.has(state)) {
          clearConnectTimeout()
          setStatus("active")
        } else if (ENDED_STATES.has(state)) {
          clearConnectTimeout()
          setStatus((current) => (current === "error" ? current : "ended"))
          cleanup()
        }
      })

      client.on("telnyx.socket.error", () => {
        fail(t.browserTest.connectionCheckError)
      })

      client.connect()
    } catch {
      fail(t.browserTest.startFailedError)
    }
  }, [assistantId, cleanup, clearConnectTimeout, fail, t])

  const stop = React.useCallback(() => {
    cleanup()
    setStatus("idle")
    setMuted(false)
  }, [cleanup])

  const toggleMute = React.useCallback(() => {
    if (!callRef.current) return
    if (muted) {
      callRef.current.unmuteAudio()
    } else {
      callRef.current.muteAudio()
    }
    setMuted((m) => !m)
  }, [muted])

  React.useEffect(() => cleanup, [cleanup])

  return { status, error, muted, start, stop, toggleMute }
}
