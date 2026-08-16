import { ImageResponse } from "next/og";

export const alt =
  "Estac — Software que resuelve. Arquitectura que escala. IA que acelera.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#0a2f3d",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f8fa 55%, #d8f5f1 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#094054",
            }}
          >
            ESTAC
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #b8ccd5",
              padding: "10px 16px",
              fontSize: 18,
              color: "#5b7380",
            }}
          >
            SOFTWARE · ARQUITECTURA · IA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: "-0.035em",
            }}
          >
            Software que resuelve.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: "#0d6b86",
            }}
          >
            Arquitectura que escala.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.12,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              color: "#0f8f86",
            }}
          >
            IA que acelera.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#5b7380",
          }}
        >
          <span>Desarrollo y arquitectura de software · Chile</span>
          <span>estac.com</span>
        </div>
      </div>
    ),
    size,
  );
}
