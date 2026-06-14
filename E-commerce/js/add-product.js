let productForm = document.getElementById("productForm");

productForm.addEventListener("submit", function(e){
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("products")) || [];

    let name = document.getElementById("name").value;

    let price = Number(document.getElementById("price").value);

    let category = document.getElementById("category").value;

    let description = document.getElementById("description").value;

    let image = document.getElementById("image").value;


    let product = {
        id: Date.now(),
        name: name,
        price: price,
        category: category,
        description: description,
        image: image
    }

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));
    alert("Product added Successfully...");

    window.location.href = "home.html";
});