import React from 'react'

export default function BadgeEstado() {

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-lg font-semibold text-gray-700 mb-2">Estado del usuario</h1>

      {/* Insignia Activo */}
      <span className="px-4 py-1 bg-green-100 text-green-700 border border-green-400 rounded-full text-sm font-medium">
        Activo
      </span>

      {/* Insignia Inactivo */}
      <span className="px-4 py-1 bg-red-100 text-red-700 border border-red-400 rounded-full text-sm font-medium">
        Inactivo
      </span>
    </div>
  );
}
