import './globals.css';

export const metadata = {
  title: 'Next.js Estilizado',
  description: 'Demostración de los 4 métodos de estilizado en Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-md p-4 text-center">
            <p className="text-xl font-bold text-gray-700">Actividad de Estilizado</p>
        </header>
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
}