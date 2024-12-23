export function númerosAteValor(valor, response) {
  for (let i = 1; i <= valor; i++) {
    response.textContent += `_${i}`;
  }
}

export function inclementador(n) {
  let soma = 0;
  for (let i = 1; i < n; i++) {
    soma += i;
  }
  return soma;
}

export function verInpares(valor,response) {

  for (let i = 1; i <= valor; i++) {
    if (i % 2 !== 0) {
      response.textContent += `_${i}`;
    }
  }
}

export function arraySoma(n) {
  const x = n.split("-");
  console.log(x);

  let soma = 0;
  for (let index = 0; index < x.length; index++) {
    const element = parseInt(x[index]);
    if (element % 2 !== 0) {
      soma += element;
    }
  }
  return soma;
}
