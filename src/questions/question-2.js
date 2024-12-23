import { handleFormSubmission } from "../handleFormSubmission.js";
export function questao02() {
  handleFormSubmission(
    ["question02-number1", "question02-number2"],
    "mostraResposta02",
    "validarButton02",
    (inputs, values, response) => {
      const valor = values.map((x) => parseInt(x));

      if (valor[0] > valor[1]) {
        response.textContent = `${valor[0]} é maior que ${valor[1]}.`;
      } else if (valor[0] < valor[1]) {
        response.textContent = `${valor[1]} é maior que ${valor[0]}.`;
      } else {
        response.textContent = `${valor[0]} e ${valor[1]} são iguais.`;
      }
    }
  );
}
