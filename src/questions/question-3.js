import { handleFormSubmission } from "../handleFormSubmission.js";
export function questao03() {
  handleFormSubmission(
    ["question03-number1"],
    "mostraResposta03",
    "validarButton03",
    (inputs, values, response) => {
      const [anoStr, mesStr, diaStr] = values[0].split("-") || [];
      const ano = parseInt(anoStr, 10);
      const mes = parseInt(mesStr, 10);
      const dia = parseInt(diaStr, 10);

      /* 
      if ([ano, mes, dia].some((elem) => isNaN(elem))) {
        response.textContent = `Coloque uma data de nascimento`;
        inputs.forEach((input) => input.classList.add("input--invalidor"));
        return;
      }
      */

      var d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        quantos_anos = ano_atual - ano;

      if (mes_atual < mes || (mes_atual == mes && dia_atual < dia)) {
        quantos_anos--;
      }

      if (quantos_anos >= 18) {
        response.textContent = `Você já pode votar nesse ano.`;
      } else {
        response.textContent = `Você ainda não pode votar nesse ano.`;
      }
    }
  );
}
