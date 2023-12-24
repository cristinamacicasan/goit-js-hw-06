// Selectează formularul din DOM
const loginForm = document.querySelector(".login-form");

// Adaugă un event listener pentru evenimentul submit al formularului
loginForm.addEventListener("submit", function (event) {
  // Previne reîncărcarea paginii la trimiterea formularului
  event.preventDefault();

  const formElements = event.target.elements;

  const formData = {};

  for (const element of formElements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  if (!formData.email || !formData.password) {
    alert("Please fill in all fields.");
  } else {
    console.log(formData);

    loginForm.reset();
  }
});
