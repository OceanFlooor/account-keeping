export const includesOperator = (number: string)=> {
  const res = number.match(/[+\-]/)
  if(!!res) {
    return {res: true, index: res.index}
  } else {
    return {res: false, index: null}
  }
}

export const separate = (number: string) => {
  // @ts-ignore
  const operator = number.match(/[+\-]/)[0]
  return {
    left: number.split(operator)[0],
    right: number.split(operator)[1],
    operator
  }
}

export const getDecimal = (number: string) => {
  if(number.includes('.')) {
    return number.split('.')[1]
  } else {
    return ''
  }
}

const calcInputNumber = (number: string, val: string) => {
  const include = includesOperator(number).res
  switch (val) {
    case '0':
      if(include){ // 包含加减号
        const text = separate(number).right
        if (!text.includes('.')) {
          if(text.length > 0) {
            if (parseInt(text) > 0) {
              return `${number}${val}`
            } else {
              return number
            }
          } else {
            return `${number}${val}`
          }

        } else {
          return number + val
        }
      } else { // 不包含加减号
        if (number === '0.00') {
          return val
        } else if (!number.includes('.')) {
          if (parseInt(number) > 0) {
            return number + val
          } else {
            return number
          }
        } else {
          return number + val
        }
      }
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if(include) {
        const text = separate(number).right
        if (text === '0') {
          return number
        } else {
          return number + val
        }
      } else {
        if (number === '0.00') {
          return val
        } else if (number === '0') {
          return number
        } else {
          return number + val
        }
      }
    case '.':
      if(include) {
        const text = separate(number).right
        if(text.includes('.')){
          return number
        } else {
          if(text.length > 0) {
            return `${number}.`
          } else {
            return `${number}0.`
          }
        }
      } else {
        if (number === '0.00') {
          return '0.'
        } else {
          return number.includes('.') ? number : `${number}.`
        }
      }
    case '+':
    case '-':
      if (number === '0.00') {
        return `0${val}`
      } else if(includesOperator(number).res){
        if(includesOperator(number).index === number.length -1) {
          return number
        } else {
          return eval(number).toFixed(3).toString() + val
        }
      } else {
        return number + val
      }
    case '删除':
      return number.slice(0, -1)
    case '清空':
    default:
      return '0.00'
  }
}

export default calcInputNumber