import { handleFormSubmission } from "../handleFormSubmission.js";
export function questao04() {
  handleFormSubmission(
    ["question04-number1", "question04-number2"],
    "mostraResposta04",
    "validarButton04",
    (inputs, values, response) => {

      const salario = parseFloat(values[0]);
      const pocentagem = parseFloat(values[1]);

      const reajuste = salario * (pocentagem / 100);

      const salarioNovo = salario + reajuste;

      response.textContent = `O valor do novo salário R$${salarioNovo}.`;
    }
  );
}
