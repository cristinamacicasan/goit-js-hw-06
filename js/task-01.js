const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}\n`);

categoryItems.forEach((category, index) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const categoryElements = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}\n`);
});
