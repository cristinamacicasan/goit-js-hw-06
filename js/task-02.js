const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");

  listItem.classList.add("item");

  listItem.textContent = ingredient;

  ingredientsList.appendChild(listItem);
});
