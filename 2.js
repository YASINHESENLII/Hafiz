const productsTableBodyElement = document.querySelector("#productsTableBody");

fetch("https://northwind.vercel.app/api/products/")
  .then(getResponse)
  .then(getJSONData);

function getResponse(res) {
  return res.json();
}

function getJSONData(data) {
  for (let i = 0; i < data.length; i++) {
    const productRaw = document.createElement("tr");
    const productIdTd = document.createElement("td");
    const productNameTd = document.createElement("td");
    const productCategoryTd = document.createElement("td");
    productIdTd.textContent = data[i].id;
    productNameTd.textContent = data[i].name;
    productCategoryTd.textContent = data[i].categoryId;
    productRaw.append(productIdTd, productCategoryTd, productNameTd);
    productsTableBodyElement.append(productRaw);
  }
}