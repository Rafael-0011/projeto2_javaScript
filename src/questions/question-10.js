import { handleFormSubmission } from "../handleFormSubmission.js";

export function questao010() {
  handleFormSubmission(
    [
      "question010-number1",
      "question010-number2",
      "question010-number3",
      "question010-number4",
      "question010-number5",
    ],
    "mostraResposta010",
    "validarButton010",
    (inputs, values, response) => {
      const converteString = values.join("/");
      const converteArryInt = converteString
        .split("/")
        .map((values) => parseInt(values));

      const valorFiltraAcima50 = converteArryInt.filter((num) => num > 50);

      if (valorFiltraAcima50.length === 0) {
        response.textContent = `Nenhum valor acima de 50`;
      } else {
        response.textContent = `Quantidades de valores maior que 50: ${valorFiltraAcima50}`;
      }
    }
  );
}
