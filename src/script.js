import teste from './handleFormSubmission.js'

const questao01 = () => {
  const valorInput = document.getElementById("inputValor01");
  const resposta = document.getElementById("mostraResposta01");
  const alteraCor = document.getElementById("inputValor01");

  alteraCor.classList.remove("input--invalidor");

  const valor = parseInt(valorInput.value);
  if (isNaN(valor)) {
    alteraCor.classList.add("input--invalidor");
    resposta.textContent = `valor invalido`;
  } else if (valor % 2 == 0) {
    resposta.textContent = `Este número ${valor} é par.`;
  } else {
    resposta.textContent = `Este número ${valor} é impar.`;
  }
  valorInput.value = "";
};

const questao02 = () => {
  const input02a = document.getElementById("inputValor02a");
  const input02b = document.getElementById("inputValor02b");
  const resposta = document.getElementById("mostraResposta02");

  input02a.classList.remove("input--invalidor");
  input02b.classList.remove("input--invalidor");

  const valor1 = parseInt(input02a.value);
  const valor2 = parseInt(input02b.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    input02a.classList.add("input--invalidor");
    input02b.classList.add("input--invalidor");

    resposta.textContent = `valor invalido`;
  } else if (valor1 > valor2) {
    resposta.textContent = `${valor1} é maior que ${valor2}.`;
    input02a.value = "";
    input02b.value = "";
  } else {
    resposta.textContent = `${valor2} é maior que ${valor1}.`;
    input02a.value = "";
    input02b.value = "";
  }
};

const questao03 = () => {
  const input03 = document.getElementById("inputValor03");
  const resposta = document.getElementById("mostraResposta03");
  console.log(input03.value);

  input03.classList.remove("input--invalidor");

  const currentDate = input03.value;
  const [ano, mes, dia] = currentDate.split("-");

  if (!currentDate) {
    resposta.textContent = `Coloquer uma data de nacimento`;
    input03.classList.add("input--invalidor");
    return;
  }

  var d = new Date(),
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),
    quantos_anos = ano_atual - ano;

  if (mes_atual < mes || (mes_atual == mes && dia_atual < dia)) {
    quantos_anos--;
  }

  if (quantos_anos >= 18) {
    resposta.textContent = `Você já pode votar nesse ano.`;
    input03.value = "";
  } else {
    input03.classList.add("input--invalidor");
    resposta.textContent = `Você ainda não pode votar nesse ano.`;
  }
};

const questao04 = () => {
  const input04a = document.getElementById("inputValor04a");
  const input04b = document.getElementById("inputValor04b");
  const resposta = document.getElementById("mostraResposta04");

  input04a.classList.remove("input--invalidor");
  input04b.classList.remove("input--invalidor");

  const valor1 = parseFloat(input04a.value);
  const valor2 = parseFloat(input04b.value);

  const reajuste = valor1 * (valor2 / 100);

  const salarioNovo = valor1 + reajuste;

  if (isNaN(valor1) || isNaN(valor2)) {
    resposta.textContent = `Valor incorreto`;
    input04a.classList.add("input--invalidor");
    input04b.classList.add("input--invalidor");
  } else {
    resposta.textContent = `O valor do novo salário R$${salarioNovo}.`;
    input04a.value = "";
    input04b.value = "";
  }
};

const questao05 = () => {
  const input05 = document.getElementById("inputValor05");
  const resposta = document.getElementById("mostraResposta05");

  input05.classList.remove("input--invalidor");

  const valor1 = parseInt(input05.value);
  const semana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  if (valor1 < 1 || valor1 > 7 || !valor1) {
    resposta.textContent = `Digite entre 1 e 7`;
    input05.classList.add("input--invalidor");
  } else {
    resposta.textContent = `${semana[valor1 - 1]}`;
    input05.value = "";
  }
};

const questao06 = () => {
  const input06 = document.getElementById("inputValor06");
  const resposta = document.getElementById("mostraResposta06");

  input06.classList.remove("input--invalidor");
  resposta.textContent = ``;

  const valor1 = parseInt(input06.value);

  if (isNaN(valor1) || valor1 < 0) {
    resposta.textContent = `Valor incorreto`;
    input06.classList.add("input--invalidor");
  } else {
    contador(valor1);
    input06.value = "";
  }
};
const questao07 = () => {
  const input07 = document.getElementById("inputValor07");
  const resposta = document.getElementById("mostraResposta07");

  input07.classList.remove("input--invalidor");
  resposta.textContent = ``;

  const valor1 = parseInt(input07.value);

  if (!valor1) {
    resposta.textContent = `Digite um valor`;
    input07.classList.add("input--invalidor");
  } else {
    const soma = contadorSoma(valor1);
    resposta.textContent = `A soma de todos os números menores que ${valor1} é ${soma}`;
  }
};

const questao08 = () => {
  const input08 = document.getElementById("inputValor08");
  const resposta = document.getElementById("mostraResposta08");

  input08.classList.remove("input--invalidor");
  resposta.textContent = ``;

  const valor1 = parseInt(input08.value);

  if (!valor1) {
    resposta.textContent = `Digite um valor`;
    input08.classList.add("input--invalidor");
  } else {
    verInpares(valor1);
    input08.value = "";
  }
};

const questao09 = () => {
  const x = document.getElementById("number1").value;
  const c = document.getElementById("number2").value;
  const v = document.getElementById("number3").value;
  const b = document.getElementById("number4").value;
  const n = document.getElementById("number5").value;
  const resposta = document.getElementById("mostraResposta09");

  //input09.classList.remove("input--invalidor");
  resposta.textContent = ``;

  const valorString = `${x}-${c}-${v}-${b}-${n}`;
  const h = valorString.split("-").map(Number);
  let p = h.filter((num) => num < 30).reduce((acc, aaa) => acc + aaa, 0);

  console.log(p);

  if (!valorString) {
    resposta.textContent = `Digite um valor`;
    //input09.classList.add("input--invalidor");
  } else {
    // arraySoma(valor1);
    //input09.value = "";
  }
};

const questao010 = () => {
  const x = document.getElementById("number6").value;
  const c = document.getElementById("number7").value;
  const v = document.getElementById("number8").value;
  const b = document.getElementById("number9").value;
  const n = document.getElementById("number10").value;
  const resposta = document.getElementById("mostraResposta10");

  //input09.classList.remove("input--invalidor");
  // resposta.textContent = ``;

  const valorString = `${x}/${c}/${v}/${b}/${n}`;
  const h = valorString.split("/").map(Number);
  let p = h.filter((num) => num > 50);

  console.log(p);

  if (!valorString) {
    resposta.textContent = `Digite um valor`;
    //input09.classList.add("input--invalidor");
  } else {
    // arraySoma(valor1);
    //input09.value = "";
  }
};

const questao011 = () => {
  const x = document.getElementById("number11").value;
  const resposta = document.getElementById("mostraResposta11");

  //input09.classList.remove("input--invalidor");
  // resposta.textContent = ``;

  var newString = "";
  for (var i = x.length - 1; i >= 0; i--) {
    newString += x[i];
  }
  console.log(newString);
  // const h = valorString.split("/").map(Number);
  //let p = h.filter((num) => num > 50);

  // console.log(p);

  if (!true) {
    resposta.textContent = `Digite um valor`;
    //input09.classList.add("input--invalidor");
  } else {
    // arraySoma(valor1);
    //input09.value = "";
  }
};

const questao012 = () => {
  const x = document.getElementById("number12").value;
  const resposta = document.getElementById("mostraResposta12");

  const textoMinusculo = x.toLowerCase();
  const primeiraLetraMaicula =
    textoMinusculo.charAt(0).toUpperCase() +
    textoMinusculo.slice(1) +
    textoMinusculo.charAt(textoMinusculo.length - 1).toUpperCase();

  console.log(primeiraLetraMaicula);
};

document.getElementById("validarButton01").addEventListener("click", questao01);
document.getElementById("validarButton02").addEventListener("click", questao02);
document.getElementById("validarButton03").addEventListener("click", questao03);
document.getElementById("validarButton04").addEventListener("click", questao04);
document.getElementById("validarButton05").addEventListener("click", questao05);
document.getElementById("validarButton06").addEventListener("click", questao06);
document.getElementById("validarButton07").addEventListener("click", questao07);
document.getElementById("validarButton08").addEventListener("click", questao08);
document.getElementById("validarButton09").addEventListener("click", questao09);
document
  .getElementById("validarButton010")
  .addEventListener("click", questao010);
document
  .getElementById("validarButton011")
  .addEventListener("click", questao011);
document
  .getElementById("validarButton012")
  .addEventListener("click", questao012);

