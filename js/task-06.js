const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", validateInput);

function validateInput() {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  const inputLength = validationInput.value.length;

  if (inputLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
