export function handleFormSubmission(inputId, responseId, buttonId, callback) {
  const inputs = inputId.map((id) => document.getElementById(id));
  const response = document.getElementById(responseId);
  const button = document.getElementById(buttonId);

  if (inputs.includes(null) || !response || !button) {
    console.error("One or more elements were not found in the DOM");
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const values = inputs.map((input) => input.value);

    response.textContent = "";

    inputs.forEach((input) => {
      input.value = "";
    });

    const invalidInputs = values.filter((elem) => !elem);

    if (invalidInputs.length > 0) {
      addClassFromElementsInvalid(inputs);
      response.textContent = "Por favor, preencha todos os campos!";
      return;
    } else {
      removeClassFromElementsInvalid(inputs);
    }

    callback(inputs, values, response);
  });
}

function addClassFromElementsInvalid(elem) {
  elem.forEach((input) => input.classList.add("input--invalidor"));
}
function removeClassFromElementsInvalid(elem) {
  elem.forEach((input) => input.classList.remove("input--invalidor"));
}
