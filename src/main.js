const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const potenc = (num1, num2) => num1 ** num2;
const div = (num1, num2) => (
  (num2 === 0) ? 'Não é possível divisão por zero' : num1 / num2
);

function hello() {
  return 'Deu Bom';
}

export { sum, sub, mult, div };
