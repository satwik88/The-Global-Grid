"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Georgia, serif",
          background: "#F5F1E8",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          color: "#1B1B1B",
        }}
      >
        <div
          style={{
            border: "4px double #1B1B1B",
            padding: "3rem",
            maxWidth: "40rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              fontSize: "0.75rem",
              fontFamily: "sans-serif",
              color: "#6B6B6B",
              marginBottom: "1.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid #2A2A2A",
            }}
          >
            Critical Editorial Error
          </p>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1rem" }}>
            The Press Has Stopped
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              fontStyle: "italic",
              color: "#6B6B6B",
              marginBottom: "2rem",
            }}
          >
            A critical failure has occurred. The editorial system has been suspended temporarily.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#1B1B1B",
              color: "#F5F1E8",
              padding: "0.75rem 2rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            Restart the Presses
          </button>
        </div>
      </body>
    </html>
  );
}
