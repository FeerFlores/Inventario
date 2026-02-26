export const App = () => {
  return (
    <main className="bg-neutral-200 h-screen flex flex-col">

      <div className="flex flex-1">
        <aside className="bg-black flex flex-col items-center text-white w-40 py-5">
          <div className="space-y-3">
            <h3>Inicio</h3>
            <h3>Consultas</h3>
            <h3>Resumen</h3>
            <h3>Dashboard</h3>
          </div>

        </aside>

        <section className="flex-1">

          <div className="flex justify-between items-baseline p-5 bg-linear-to-r from-blue-950 to-blue-600 text-white">
            <h1>Gestión del inventario</h1>
            <h3>Nombre usuario</h3>
          </div>

          <div className="py-5 px-10">
            <h2>Inventario</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-blue-300 bg-white">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border border-blue-300 px-4 py-2 text-left">ID</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">SKU</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">Producto</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">Precio MX</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">Precio USD</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">Stock</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">Proveedor</th>
                    <th className="border border-blue-300 px-4 py-2 text-left">Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="border border-blue-300 px-4 py-2">1</td>
                    <td className="border border-blue-300 px-4 py-2">HT123</td>
                    <td className="border border-blue-300 px-4 py-2">Zucaritas</td>
                    <td className="border border-blue-300 px-4 py-2">50</td>
                    <td className="border border-blue-300 px-4 py-2">2.5</td>
                    <td className="border border-blue-300 px-4 py-2">1200</td>
                    <td className="border border-blue-300 px-4 py-2">Grupo Fer</td>
                    <td className="border border-blue-300 px-4 py-2">Cereales</td>
                  </tr>

                  <tr className="hover:bg-blue-50">
                    <td className="border border-blue-300 px-4 py-2">2</td>
                    <td className="border border-blue-300 px-4 py-2">HT1234</td>
                    <td className="border border-blue-300 px-4 py-2">Chococrispis</td>
                    <td className="border border-blue-300 px-4 py-2">50</td>
                    <td className="border border-blue-300 px-4 py-2">2.5</td>
                    <td className="border border-blue-300 px-4 py-2">1300</td>
                    <td className="border border-blue-300 px-4 py-2">Grupo Fer</td>
                    <td className="border border-blue-300 px-4 py-2">Cereales</td>
                  </tr>

                  <tr className="hover:bg-blue-50">
                    <td className="border border-blue-300 px-4 py-2">3</td>
                    <td className="border border-blue-300 px-4 py-2">HT12345</td>
                    <td className="border border-blue-300 px-4 py-2">Cheerios</td>
                    <td className="border border-blue-300 px-4 py-2">50</td>
                    <td className="border border-blue-300 px-4 py-2">2.5</td>
                    <td className="border border-blue-300 px-4 py-2">1200</td>
                    <td className="border border-blue-300 px-4 py-2">Grupo Fer</td>
                    <td className="border border-blue-300 px-4 py-2">Cereales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}

export default App