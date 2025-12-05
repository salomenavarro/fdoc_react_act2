// Este componente usa Módulos CSS, garantizando que los estilos están encapsulados
// y no afectan a otros componentes en la aplicación.

import React from 'react'
import styles from './FichaProducto.module.css'


export default function FichaProducto({ producto, precio, imagen }) {
  return (

    <div className={styles.tarjeta}>
      {/* Se utiliza el alt descriptivo para accesibilidad. */}
      <img src={imagen} alt={`Imagen del producto: ${producto}`} className={styles.imagen} />

      <div className={styles.contenido}>
        {/* CORRECCIÓN: Se utiliza <h3> para el nombre del producto para mantener una jerarquía semántica adecuada. */}
        <h3 className={styles.nombre}>{producto} </h3>
        <div className={styles.precioBoton}>
          {/* CORRECCIÓN: Se utiliza <h4> para el precio para mantener una jerarquía semántica adecuada. */}
          <h4 className={styles.precio}>${precio}</h4>
          <button className={styles.boton}>Agregar</button>
        </div>
      </div>

    </div>

  )
}