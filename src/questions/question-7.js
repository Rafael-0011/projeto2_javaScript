import { handleFormSubmission } from "../handleFormSubmission.js";
import { inclementador } from "../utils.js";

export function questao07() {
  handleFormSubmission(
    ["question07-number1"],
    "mostraResposta07",
    "validarButton07",
    (inputs, values, response) => {
      const valor = parseInt(values);

      const soma = inclementador(valor);
      response.textContent = `A soma de todos os números menores que ${valor} é ${soma}`;
    }
  );
}
