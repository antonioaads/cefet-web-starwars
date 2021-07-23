export const int2roman = (number) => {
  const romanNumbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
  }

  return romanNumbers[number] ?? '[ERRO]'
}