import React from 'react'
// Importación de los componentes para la demostración de estilizado
import PerfilGlobal from './components/PerfilGlobal'
import FichaProducto from './components/FichaProducto'
import BadgeEstado from './components/BadgeEstado'
import AvisoInline from './components/AvisoInline'

// Datos de ejemplo para FichaProducto
const productData = {
    producto: "Botas de Invierno Ticlasicbo", 
    precio: 195.995, 
    // Uso de placeholder para asegurar la carga sin depender de URL externa
    imagen: "https://placehold.co/140x140/9D4EDD/FFFFFF?text=Producto" 
}

// Este archivo representa la página principal (ruta "/").
// Es un Server Component por defecto y orquesta la composición.

export default function Page() {
    
  return (
    <div className="p-8 space-y-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Demostración de Métodos de Estilizado en Next.js
        </h1>
        
        {/* 1. CSS Global */}
        <PerfilGlobal 
            nombre="Archivo CSS en /app/globals.css" 
            descripcion="Los estilos globales se definen en un archivo CSS general y afectan a toda la aplicación. Útil para estilos base o temas generales." 
            texto="¡Clic para Info!"
        />
        
        {/* 2. Módulos CSS */}
        <FichaProducto 
            producto={productData.producto} 
            precio={productData.precio} 
            imagen={productData.imagen}
        />
        
        {/* 3. Estilos en Línea */}
        <AvisoInline/>
        
        {/* 4. Tailwind CSS (Múltiples estados para demostrar dinamismo) */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
            {/* Se muestran dos estados del componente dinámico */}
            <BadgeEstado status="activo"/>
            <BadgeEstado status="inactivo"/>
        </div>
    </div>
  )
}