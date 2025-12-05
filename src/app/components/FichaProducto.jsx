// Este componente usa Módulos CSS, garantizando que los estilos están encapsulados
// y no afectan a otros componentes en la aplicación.

import React from 'react'
import styles from './FichaProducto.module.css'

export default function FichaProducto({ producto, precio, imagen }) {
  return (

    <div className={styles.tarjeta}>
      {/* CORRECCIÓN 3: Añadir un atributo alt descriptivo para accesibilidad. */}
      <img src={imagen} alt={`Imagen del producto: ${producto}`} className={styles.imagen} />

      <div className={styles.contenido}>
        <h1 className={styles.nombre}>{producto} </h1>
        <div className={styles.precioBoton}>
          <h2 className={styles.precio}>${precio}</h2>
          <button className={styles.boton}>Agregar</button>
        </div>
      </div>

    </div>

  )
}