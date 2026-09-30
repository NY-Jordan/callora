import { ImageResponse } from "next/og"

export const alt = "Callora — Ne laissez plus vos appels et demandes sans réponse"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "88px",
          backgroundColor: "#161421",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(130,84,238,0.35), rgba(22,20,33,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#8254ee",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 600, color: "#fafafa" }}>
            Callora
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "60px",
            fontWeight: 600,
            lineHeight: 1.15,
            color: "#fafafa",
            maxWidth: "920px",
          }}
        >
          Ne laissez plus vos appels et demandes sans réponse.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "28px",
            color: "rgba(250,250,250,0.65)",
          }}
        >
          Callora — votre assistant pour les appels et demandes, adapté à votre secteur
        </div>
      </div>
    ),
    { ...size }
  )
}
