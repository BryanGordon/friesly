import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'

import { useState } from 'react'

export function Home () {
  const [degrees, setDegrees] = useState<number | null>(0)
  const [result, setResult] = useState(0)

  const convertDegrees = (degrees: number | null) => {
    if (degrees === null) {
      window.alert('Error al calcular.')
    } else {
      let arrValue: string[] = ['']
      let converNum: number = 0
      const value = Number((1.8 * degrees + 32).toFixed())
      arrValue = value.toString().split('')
      const last = Number(arrValue[arrValue.length - 1])

      if (last > 0 && last <= 4) {
        arrValue[arrValue.length - 1] = '0'
        converNum = Number(arrValue.join(''))
        setResult(converNum)
      } else if (last >= 7) {
        arrValue[arrValue.length - 1] = '0'
        converNum = Number(arrValue.join(''))
        converNum += 10
        setResult(converNum)
      } else if (last === 6) {
        arrValue[arrValue.length - 1] = '5'
        converNum = Number(arrValue.join(''))
        setResult(converNum)
      } else {
        setResult(value)
      }
    }
  }

  return (
    <main>
      <h1>FRIESLY</h1>
      <section>
        <div className='input-container'>
          <label>Ingrese la temperatura en °C</label>
          <Input type='number' onChange={(event) => setDegrees((event.target as HTMLInputElement).valueAsNumber)} />
          <Button onClick={() => convertDegrees(degrees)}>Calcular</Button>
        </div>
        <div className='results'>
          <span>La temperatura es: <span className='font-bold'>{result}</span></span>
        </div>
      </section>
      <section>
        <div className='data-container'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold text-black text-center font-high'>Producto</TableHead>
                <TableHead className='font-bold text-black text-center font high'>Tiempo</TableHead>
                <TableHead className='font-bold text-black text-center font-high'>Temperatura</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

              <TableRow>
                <TableCell className='font-medium text-center'>Alitas BBQ</TableCell>
                <TableCell className='font-medium text-center'>16 min</TableCell>
                <TableCell className='font-medium text-center'>350</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium text-center'>Lasaña (Maheso)</TableCell>
                <TableCell className='font-medium text-center'>12 min</TableCell>
                <TableCell className='font-medium text-center'>380</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium text-center'>Lasaña (Plumrose)</TableCell>
                <TableCell className='font-medium text-center'>20 min</TableCell>
                <TableCell className='font-medium text-center'>380</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium text-center'>Lasaña (Facundo)</TableCell>
                <TableCell className='font-medium text-center'>15 min</TableCell>
                <TableCell className='font-medium text-center'>380</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium text-center'>Papas fritas (Plumrose)</TableCell>
                <TableCell className='font-medium text-center'>17 min</TableCell>
                <TableCell className='font-medium text-center'>395</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium text-center'>Papas fritas (Bolsa Azul)</TableCell>
                <TableCell className='font-medium text-center'>15 min</TableCell>
                <TableCell className='font-medium text-center'>390</TableCell>
              </TableRow>

            </TableBody>
            <TableCaption>Productos de la freidora de aire</TableCaption>
          </Table>
        </div>
      </section>
    </main>
  )
}
