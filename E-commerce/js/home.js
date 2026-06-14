let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");
},3000);


// product
let productContainer = document.getElementById("productContainer");

function loadProduct(){

    let products = JSON.parse(localStorage.getItem("products")) || [];

    productContainer.innerHTML = "";
    products.forEach((p, index) =>{
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${p.image}">

                <h3>${p.name}</h3>

                <p class="description">
                    ${p.description}
                </p>

                <h4>₹ ${p.price}</h4>

                <div class="buttons">
                    <button onclick="addToCart(${index})"> Add to Cart </button>

                    <button onclick="viewProd(${index})">View Product</button>
                </div>
            </div>
        `;
    });
}
loadProduct();


// read more
document.addEventListener("click", function(e){
    if(e.target.classList.contains("read-more-btn")){
        let desc = e.target.previousElementSibling;

        desc.classList.toggle("expanded");

        if(desc.classList.contains("expanded")){
            e.target.textContent = "Read Less";
        }else{
            e.target.textContent = "Read More";
        }
    }
});


// add to cart
function addToCart(index){
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let selected = products[index];
    let alreadyExist = cart.find(p => p.name === selected.name);

    if(alreadyExist){
        alert("Product Already Exist...");
        alreadyExist.qty +=1;
    }
    else{
        selected.qty = 1;
        cart.push(selected);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}


// view product
function viewProd(index){
    let products = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("viewIndex", index);

    window.location.href = "view-product.html"

}
