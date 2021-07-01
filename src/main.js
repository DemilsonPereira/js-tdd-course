function sum(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return (num2 === 0) ? 'Não é possível divisão por zero' : num1 / num2;
}

module.exports = {
  sum,
  sub,
  mult,
  div
}
