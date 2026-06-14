
let cartBody = document.getElementById("cartBody");

function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart Data:", cart);
    console.log("cartBody:", cartBody);

    cartBody.innerHTML = "";

    cart.forEach((p, index) => {
            
        cartBody.innerHTML += `
        <tr>
            <td> ${index + 1} </td>
            <td> <img src = " ${p.image}" > </td>
            <td> ${p.name} </td>
            <td> ${p.description} </td>
            <td>₹ ${p.price} </td>
            <td> ${p.qty} </td>
            <td>
                <button class = "edit-btn" onclick = "edit(${index})"> Edit </button>
                <button class = "delete-btn" onclick = "deleted(${index})"> delete </button>
            </td>
        </tr>
        `;
    });

}
loadCart();

function edit(index){

    localStorage.setItem("editIndex", index);
    window.location.href = "update-product.html";
}

function deleted(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let selectedProduct = cart[index];

    if(selectedProduct.qty > 1){
        selectedProduct.qty--;
        
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
        return;
    }

    let answer = confirm("Delete Product ?");

    if(answer){

        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        let productIndex = products.findIndex(p => p.id === selectedProduct.id);

        if(productIndex !== -1){
            products.splice(productIndex, 1);
            localStorage.setItem("products", JSON.stringify(products));
        }

        loadCart();
    }
}


let ordersBtn = document.getElementById("ordersBtn");

ordersBtn.addEventListener("click", () =>{
    window.location.href = "orders.html";
})