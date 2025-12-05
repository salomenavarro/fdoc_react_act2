// Este componente usa estilos definidos en el archivo CSS global (globals.css).
// Este método es ideal para estilos base, tipografía y estructuras de layout generales.

"use client";

import React, { useState } from 'react'

export default function PerfilGlobal({ nombre, descripcion, texto }) {
    const [showMessage, setShowMessage] = useState(false);

    const manejarClick = () => {
        // CORRECCIÓN: Reemplazado alert() por un mensaje de UI para mejores prácticas UX.
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); // Ocultar después de 3 segundos
    };

    return (
        <div className='tarjeta'>
            <h1> CSS Global </h1>
            <h2>trabajo en {nombre}</h2>
            <p>{descripcion}</p>
            <button className='boton' onClick={manejarClick}>{texto}</button>
            
            {/* Mensaje de Feedback de UI */}
            {showMessage && (
                <div className="mt-4 p-3 bg-indigo-100 text-indigo-800 rounded-lg text-sm transition-opacity duration-300 opacity-100">
                    Los estilos globales son ideales para temas generales.
                </div>
            )}
        </div>
    )
}