let productForm = document.getElementById("productForm");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let editIndex = localStorage.getItem("editIndex");

let p = cart[editIndex];

// default
if(p){
    document.getElementById("name").value = p.name;
    document.getElementById("price").value = p.price;
    document.getElementById("category").value = p.category;
    document.getElementById("description").value = p.description;
    document.getElementById("image").value = p.image;

}

// save
productForm.addEventListener("submit", function(e){
    e.preventDefault();

    let updateName = document.getElementById("name").value;

    let updatePrice = Number(document.getElementById("price").value);

    let updateCategory = document.getElementById("category").value;

    let updateDescription = document.getElementById("description").value;

    let updateImage = document.getElementById("image").value;


    // update cart
    cart[editIndex].name = updateName;

    cart[editIndex].price = updatePrice;

    cart[editIndex].category = updateCategory;

    cart[editIndex].description = updateDescription;

    cart[editIndex].image = updateImage;

    localStorage.setItem("cart", JSON.stringify(cart));


    // update product
    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach((product) => {

        if(product.id === p.id){

            product.name = updateName;

            product.price = updatePrice;

            product.category = updateCategory;

            product.description = updateDescription;

            product.image = updateImage;
        }
    });

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Updated Successfully");

    window.location.href = "cart.html";
});
