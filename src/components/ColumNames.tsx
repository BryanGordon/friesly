import { TableHead, TableRow } from './ui/table'

interface Props {
  column1: string,
  column2: string,
  column3: string
}

export function ColumNames ({ column1, column2, column3 }: Props) {
  return (
    <TableRow>
      <TableHead className='font-bold text-black text-center font-high'>{column1}</TableHead>
      <TableHead className='font-bold text-black text-center font high'>{column2}</TableHead>
      <TableHead className='font-bold text-black text-center font-high'>{column3}</TableHead>
    </TableRow>
  )
}