// Esta línea indica que el componente se ejecutará en el NAVEGADOR (no en el servidor).
// Esto permite usar eventos (onClick), hooks (useState, useEffect), etc.

"use client";

import React from 'react'

export default function ({ nombre, descripcion, texto }) {

    const manejarClick = () => {
        alert("Los estilos globales son ideales para temas generales, pero evita usarlos para estilos específicos para no sobrecargar el archivo.");
    };

    return (
        <div className='tarjeta'>
            <h1 className='tarjeta h1'> CSS Global </h1>
            <h2 className='tarjeta h2'>trabajo en {nombre}</h2>
            <p className='tarjeta p'>{descripcion}</p>
            <button className='boton' onClick={manejarClick}>{texto}</button>
        </div>
    )
}
