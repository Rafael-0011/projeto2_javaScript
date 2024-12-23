import { handleFormSubmission } from "../handleFormSubmission.js";
export function questao05() {
  handleFormSubmission(
    ["question05-number1"],
    "mostraResposta05",
    "validarButton05",
    (inputs, values, response) => {
      const dia = parseInt(values);

      const semana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ];

      if (dia < 1 || dia > 7 || !dia) {
        response.textContent = `Digite entre 1 e 7`;
      } else {
        response.textContent = `${semana[dia - 1]}`;
      }
    }
  );
}
