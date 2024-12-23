import { handleFormSubmission } from "../handleFormSubmission.js";
import { inclementador } from "../utils.js";

export function questao09() {
  handleFormSubmission(
    [
      "question09-number1",
      "question09-number2",
      "question09-number3",
      "question09-number4",
      "question09-number5",
    ],
    "mostraResposta09",
    "validarButton09",
    (inputs, values, response) => {
      const converteString = values.join("-");
      const converteArryInt = converteString
        .split("-")
        .map((values) => parseInt(values));

      const valorFiltraSomaMenor30 = converteArryInt
        .filter((num) => num < 30)
        .reduce((acc, cur) => acc + cur, 0);

      response.textContent = `soma de todos os números que são menores que 30: ${valorFiltraSomaMenor30}`;
    }
  );
}
