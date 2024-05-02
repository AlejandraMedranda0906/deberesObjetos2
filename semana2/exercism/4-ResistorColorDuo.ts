let COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  let colorCode = (color: string): number => COLORS.indexOf(color)
  // resistor-color solution END
  export const decodedValue = ([tens, ones]: string[]): number =>
    colorCode(tens) * 10 + colorCode(ones)
  