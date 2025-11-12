import React from 'react'
import PerfilGlobal from './components/PerfilGlobal'
import FichaProducto from './components/FichaProducto'
import BadgeEstado from './components/BadgeEstado'
import AvisoInline from './components/AvisoInline'

export default function page() {
   
  return (
    <>

    <PerfilGlobal nombre="Archivo CSS en /app/globals.css" descripcion="Los estilos globales se definen en un archivo CSS general (como globals.css) y afectan a toda la aplicación. Útil para estilos base o temas generales." texto="¡Clic aquí!"/>
    <FichaProducto producto="Botas para Mujer Ticlasicbo Basement color Negro" precio={195.995} imagen="https://media.falabella.com/falabellaCO/883360085_5/w=1500,h=1500,fit=pad"/>
    <AvisoInline/>
    <BadgeEstado/>
    </>
  )
}

// Este archivo representa la página principal (ruta "/").
// En Next.js 13+, todos los archivos page.jsx son SERVER COMPONENTS por defecto.
// No pueden tener interactividad directa (onClick, useState, etc.).
// Pero sí pueden importar Client Components (que sí son interactivos).
