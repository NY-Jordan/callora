"use server"

import { Resend } from "resend"

export type BookDemoErrorCode =
  | "missingFields"
  | "invalidEmail"
  | "serverMisconfigured"
  | "sendFailed"

export type BookDemoState = {
  status: "idle" | "success" | "error"
  error?: BookDemoErrorCode
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitBookDemo(
  _prevState: BookDemoState,
  formData: FormData
): Promise<BookDemoState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const practice = String(formData.get("practice") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const date = String(formData.get("date") ?? "").trim()
  const timeSlot = String(formData.get("timeSlot") ?? "").trim()
  const notes = String(formData.get("notes") ?? "").trim()

  if (!name || !email || !practice) {
    return { status: "error", error: "missingFields" }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", error: "invalidEmail" }
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL_TO ?? "ynguetse@gmail.com"
  const fromEmail = process.env.CONTACT_EMAIL_FROM ?? "Callora <onboarding@resend.dev>"

  const details = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Cabinet : ${practice}`,
    phone ? `Téléphone : ${phone}` : null,
    date ? `Date souhaitée : ${date}` : null,
    timeSlot ? `Créneau souhaité : ${timeSlot}` : null,
    notes ? `Précisions : ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n")

  if (!apiKey) {
    // Not fatal for local dev — log so the request isn't silently lost while
    // RESEND_API_KEY is unset, but surface a clear error to the visitor.
    console.error(
      "[book-demo] RESEND_API_KEY is not set. Booking request was not emailed:\n" + details
    )
    return { status: "error", error: "serverMisconfigured" }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nouvelle demande de démo — ${practice}`,
      text: details,
    })
    if (error) {
      console.error("[book-demo] Resend returned an error:", error)
      return { status: "error", error: "sendFailed" }
    }
    return { status: "success" }
  } catch (error) {
    console.error("[book-demo] Failed to send booking email:", error)
    return { status: "error", error: "sendFailed" }
  }
}
