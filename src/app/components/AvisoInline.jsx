import React from 'react'

export default function AvisoInline() {
    const Aviso = {
    backgroundColor: "#e0f7fa",
    border: "2px solid #00838f",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };
  return (
    <div style={Aviso}>
      <h2 style={{ color: "#006064", marginBottom: "10px" }}>
        Aviso Importante
      </h2>
      <p style={{ color: "#004d40", fontSize: "16px" }}>
        Los estilos en línea se aplican directamente en los elementos JSX usando el atributo stylecon un objeto JavaScript. Útil para estilos dinámicos, pero menos escalable.
      </p>
    </div>
  )
}
