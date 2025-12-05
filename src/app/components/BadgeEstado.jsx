// Este componente usa Tailwind CSS. Es ideal para aplicar utilidad de clases
// de forma rápida y concisa, permitiendo la creación de estilos dinámicos condicionalmente.

import React from 'react'

// CORRECCIÓN 5: El componente es ahora dinámico, acepta un prop 'status'.
export default function BadgeEstado({ status = 'activo' }) {
    
    const isActive = status.toLowerCase() === 'activo';
    
    // Clases dinámicas de Tailwind
    const baseClasses = "px-4 py-1 rounded-full text-sm font-medium border transition duration-300";
    const activeClasses = "bg-green-100 text-green-700 border-green-400 hover:bg-green-200";
    const inactiveClasses = "bg-red-100 text-red-700 border-red-400 hover:bg-red-200";

    const statusClasses = isActive ? activeClasses : inactiveClasses;
    const displayText = isActive ? 'Activo' : 'Inactivo';

    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg shadow-inner w-full max-w-xs">
            <h1 className="text-lg font-bold text-gray-800 mb-2">
                Estado Dinámico (Tailwind CSS)
            </h1>

            <span className={`${baseClasses} ${statusClasses}`}>
                {displayText}
            </span>
            
            <p className="text-xs text-gray-500 mt-2 text-center">
                El componente usa un prop para cambiar dinámicamente las clases de Tailwind.
            </p>
        </div>
    );
}