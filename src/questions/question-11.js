import { handleFormSubmission } from "../handleFormSubmission.js";

export function questao011() {
  handleFormSubmission(
    ["question011-number1"],
    "mostraResposta011",
    "validarButton011",
    (inputs, values, response) => {
      const converteString = values[0];

      var newString = "";
      for (let i = converteString.length - 1; i >= 0; i--) {
        newString += converteString[i];
      }
      console.log(newString);

      response.textContent = `${newString}`;
    }
  );
}
