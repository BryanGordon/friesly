import { TableCell, TableRow } from './ui/table'

interface Props {
  name: string,
  time: string,
  temperature: number | undefined
}

export function DataRow ({ name, time, temperature }: Props) {
  return (
    <TableRow>
    <TableCell className='font-medium text-center'>{name}</TableCell>
    <TableCell className='font-medium text-center'>{time}</TableCell>
    <TableCell className='font-medium text-center'>{temperature}</TableCell>
  </TableRow>
  )
}