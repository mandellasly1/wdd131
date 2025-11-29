const products = [
  { id: "fc-1888", name: "Apple Phones", averagerating: 4.5 },
  { id: "fc-2050", name: "Samsung Phones", averagerating: 4.7 },
  { id: "fs-1987", name: "Nokia Phones", averagerating: 3.5 },
  { id: "ac-2000", name: "Hawaii Phones", averagerating: 3.9 },
  { id: "jj-1969", name: "Laptops", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});