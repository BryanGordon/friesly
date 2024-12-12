export function ConvertDegrees (degrees: number) {
  if (!degrees) {
    window.alert('Error al calcular.')
    return
  } else {
    let arrValue: string[] = ['']
    let converNum: number = 0
    const value = Number((1.8 * degrees + 32).toFixed())
    arrValue = value.toString().split('')
    const last = Number(arrValue[arrValue.length - 1])

    if (last > 0 && last <= 4) {
      arrValue[arrValue.length - 1] = '0'
      converNum = Number(arrValue.join(''))
      return converNum
    } else if (last >= 7) {
      arrValue[arrValue.length - 1] = '0'
      converNum = Number(arrValue.join(''))
      converNum += 10
      return converNum
    } else if (last === 6) {
      arrValue[arrValue.length - 1] = '5'
      converNum = Number(arrValue.join(''))
      return converNum
    } else {
      return value
    }
  }

}