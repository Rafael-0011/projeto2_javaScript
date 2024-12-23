import { handleFormSubmission } from "../handleFormSubmission.js";

export function questao01() {
  handleFormSubmission(
    ["question01-number1"],
    "mostraResposta01",
    "validarButton01",
    (inputs, values, response) => {
      const valor = parseInt(values[0]);

      if (valor % 2 === 0) {
        response.textContent = `Este número ${valor} é par.`;
      } else {
        response.textContent = `Este número ${valor} é impar.`;
      }
    }
  );
}
