export type CallStatus = "resolved" | "transferred" | "escalated" | "follow-up"

export const statusStyles: Record<
  CallStatus,
  { dot: string; bg: string; text: string }
> = {
  resolved: {
    dot: "bg-success",
    bg: "bg-success-soft",
    text: "text-success",
  },
  transferred: {
    dot: "bg-info",
    bg: "bg-info-soft",
    text: "text-info",
  },
  escalated: {
    dot: "bg-danger",
    bg: "bg-danger-soft",
    text: "text-danger",
  },
  "follow-up": {
    dot: "bg-warning",
    bg: "bg-warning-soft",
    text: "text-warning",
  },
}

export const dashboardStatValues = ["127", "103", "8", "95"]

export const dashboardCalls: {
  id: string
  phone: string
  status: CallStatus
  time: string
}[] = [
  { id: "d-1", phone: "+33 6 •• •• 42 18", status: "resolved", time: "09:41" },
  { id: "d-2", phone: "+33 6 •• •• 07 55", status: "transferred", time: "09:12" },
  { id: "d-3", phone: "+41 79 •• •• 33 02", status: "escalated", time: "08:57" },
  { id: "d-4", phone: "+32 4 •• •• 19 88", status: "follow-up", time: "08:44" },
  { id: "d-5", phone: "+44 7 •• •• 61 20", status: "resolved", time: "08:30" },
  { id: "d-6", phone: "+33 6 •• •• 88 41", status: "follow-up", time: "08:15" },
]

export const callDemoSpeakers: ("caller" | "ai")[] = ["caller", "ai", "caller", "ai"]
