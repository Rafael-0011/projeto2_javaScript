import { handleFormSubmission } from "../handleFormSubmission.js";
import { verInpares } from "../utils.js";

export function questao08() {
  handleFormSubmission(
    ["question08-number1"],
    "mostraResposta08",
    "validarButton08",
    (inputs, values, response) => {

      const valor = parseInt(values);

      verInpares(valor, response);
    }
  );
}
