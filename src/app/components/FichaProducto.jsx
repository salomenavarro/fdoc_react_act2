import React from 'react'
import styles from './FichaProducto.module.css'


export default function FichaProducto({ producto, precio, imagen }) {
  return (

    <div className={styles.tarjeta}>
      <img src={imagen} alt="" className={styles.imagen} />

      <h1 className={styles.nombre}>{producto} </h1>
      <div className={styles.precioBoton}>
        <h2 className={styles.precio}>{precio}</h2>
        <button className={styles.boton}>Agregar</button>
      </div>

    </div>

  )
}
