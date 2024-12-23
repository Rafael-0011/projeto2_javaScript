import { handleFormSubmission } from "../handleFormSubmission.js";
import { númerosAteValor } from "../utils.js";

export function questao06() {
  handleFormSubmission(
    ["question06-number1"],
    "mostraResposta06",
    "validarButton06",
    (inputs, values, response) => {
      const valor = parseInt(values);

      númerosAteValor(valor, response);
    }
  );
}
