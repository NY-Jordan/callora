"use client"

import * as React from "react"
import { Loader2Icon, MicIcon, MicOffIcon, PhoneOffIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { REMOTE_AUDIO_ELEMENT_ID, useBrowserTestCall } from "@/lib/use-browser-test-call"

import { useLanguage } from "./language-provider"

const DEMO_ASSISTANT_ID = process.env.NEXT_PUBLIC_TELNYX_DEMO_ASSISTANT_ID ?? null

export function BrowserTestCallDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useLanguage()
  const { status, error, muted, start, stop, toggleMute } = useBrowserTestCall(DEMO_ASSISTANT_ID)

  // `open` can flip from a plain trigger button anywhere on the page (not a DialogTrigger), so
  // drive the call off `open` itself rather than the modal's own onOpenChange — that only fires
  // for its own internal dismiss events (Escape, backdrop click).
  React.useEffect(() => {
    if (open) {
      start()
    } else {
      stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog isOpen={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle>{t.browserTest.title}</DialogTitle>
        <DialogDescription>{t.browserTest.description}</DialogDescription>
      </DialogHeader>
      <audio id={REMOTE_AUDIO_ELEMENT_ID} autoPlay hidden />
      <div className="flex flex-col items-center gap-3 py-6">
        {(status === "connecting" || status === "ringing") && (
          <>
            <Loader2Icon className="size-8 animate-spin text-brand" />
            <p className="text-sm text-muted-foreground">{t.browserTest.connecting}</p>
          </>
        )}
        {status === "active" && (
          <>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            <p className="text-sm">{t.browserTest.talkingTo}</p>
            <div className="flex gap-2">
              <Button variant="outline" onPress={toggleMute}>
                {muted ? <MicOffIcon /> : <MicIcon />} {muted ? t.browserTest.unmute : t.browserTest.mute}
              </Button>
              <Button variant="destructive" onPress={stop}>
                <PhoneOffIcon /> {t.browserTest.endCall}
              </Button>
            </div>
          </>
        )}
        {status === "ended" && (
          <>
            <p className="text-sm text-muted-foreground">{t.browserTest.callEnded}</p>
            <Button onPress={start}>{t.browserTest.testAgain}</Button>
          </>
        )}
        {status === "error" && (
          <>
            <p className="text-sm text-danger">{error}</p>
            <Button onPress={start}>{t.browserTest.tryAgain}</Button>
          </>
        )}
      </div>
      <DialogFooter>
        <Button variant="outline" onPress={() => onOpenChange(false)}>
          {t.browserTest.close}
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
