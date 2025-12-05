// Este componente usa estilos definidos en el archivo CSS global (globals.css).
// Este método es ideal para estilos base, tipografía y estructuras de layout generales.

"use client";

import React from 'react'

export default function PerfilGlobal({ nombre, descripcion, texto }) {

    // Nota: Se ha conservado la estructura de la función, pero se recomienda evitar alert()
    const manejarClick = () => {
        alert("Los estilos globales son ideales para temas generales, pero evita usarlos para estilos específicos para no sobrecargar el archivo."); 
    };

    return (
        // CORRECCIÓN 2: Aplicar la clase 'tarjeta' solo al contenedor principal.
        // Los estilos de h1, h2 y p se aplican vía selectores descendientes en globals.css.
        <div className='tarjeta'>
            <h1> CSS Global </h1>
            <h2>trabajo en {nombre}</h2>
            <p>{descripcion}</p>
            <button className='boton' onClick={manejarClick}>{texto}</button>
        </div>
    )
}