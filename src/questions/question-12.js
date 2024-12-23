import { handleFormSubmission } from "../handleFormSubmission.js";

export function questao012() {
  handleFormSubmission(
    ["question012-number1"],
    "mostraResposta012",
    "validarButton012",
    (inputs, values, response) => {
      const text = values[0];
      const textoMinusculo = text.toLowerCase();
      const primeiraLetraMaicula =
        textoMinusculo.charAt(0).toUpperCase() +
        textoMinusculo.slice(1, -1) +
        textoMinusculo.charAt(textoMinusculo.length - 1).toUpperCase();

      response.textContent = `${primeiraLetraMaicula}`;
    }
  );
}
