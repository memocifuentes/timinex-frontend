export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Timinex
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.7 }}>
          En construcción 🚧
        </p>
      </div>
    </main>
  );
}
