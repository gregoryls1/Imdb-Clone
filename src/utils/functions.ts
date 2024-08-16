export const decimalRound = (number: number) => {
  return Math.round(number * 10) / 10
}

export const converterData = (dataIso: string) => {
  const data = new Date(dataIso)

  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0') // Mês começa em 0
  const ano = data.getFullYear()

  return `${dia}/${mes}/${ano}`
}
