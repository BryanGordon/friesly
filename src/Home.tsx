import { ColumNames } from './components/ColumNames'
import { DataRow } from './components/DataRow'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Table, TableCaption, TableBody, TableHeader } from './components/ui/table'

import { ConvertDegrees } from './lib/convertDegrees'
import { useState } from 'react'

export function Home () {
  const [degrees, setDegrees] = useState<number>(0)
  const [result, setResult] = useState<number | undefined>(0)

const getResult = () => {
  setResult(ConvertDegrees(degrees))
}

  return (
    <main>
      <h1>FRIESLY</h1>
      <section>

        <div className='input-container'>
          <label>Ingrese la temperatura en °C</label>
          <Input type='number' onChange={(event) => setDegrees((event.target as HTMLInputElement).valueAsNumber)} />
          <Button onClick={() => getResult()}>Calcular</Button>
        </div>

        <div className='results'>
          <span>La temperatura es: <span className='font-bold'>{result}</span></span>
        </div>

      </section>
      
      <section>
        <div className='data-container'>
          <Table>
            <TableHeader>
              <ColumNames column1='Producto' column2='Tiempo' column3='Temperatura'/>
            </TableHeader>
            <TableBody>

              <DataRow name='Alitas BBQ' time='16 min' temperature= {350}/>

              <DataRow name='Lasaña (maheso)' time='12 min' temperature= {380}/>

              <DataRow name='Lasaña (Plumrose)' time='20 min' temperature= {380}/>

              <DataRow name='Lasaña (Facundo)' time='15 min' temperature= {380}/>

              <DataRow name='Papas fritas (Plumrose)' time='17 min' temperature= {395}/>

              <DataRow name='Papas fritas (Bolsa azul)' time='15 min' temperature= {390}/>

            </TableBody>
            <TableCaption>Productos de la freidora de aire</TableCaption>
          </Table>
        </div>
      </section>
    </main>
  )
}
