let products = JSON.parse(localStorage.getItem("products")) || [];

let index = localStorage.getItem("viewIndex");

let p = products[index];

document.getElementById("productImage").src = p.image;
document.getElementById("productName").textContent = p.name;
document.getElementById("productCategory").textContent = p.category;
document.getElementById("productDescription").textContent = p.description;
document.getElementById("productPrice").textContent = "₹ " + p.price;

let cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", () =>{
    addToCart(index);

});

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


