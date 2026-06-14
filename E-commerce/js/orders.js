let orderBody = document.getElementById("orderBody");
let finalBill = document.getElementById("finalBill");

function loadOrder(){
    let orders = JSON.parse(localStorage.getItem("cart")) || [];
    orderBody.innerHTML = "";

    let bill = 0;

    orders.forEach((p, index) => {
        let total = p.price * p.qty;
        bill += total;

        orderBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td> <img src = "${p.image}"> </td>
                <td>${p.name}</td>
                <td>₹ ${p.price}</td>
                <td>
                    <button class="qty-btn" onclick="decreaseQty(${index})">    
                        -
                    </button>
                    ${p.qty}
                    <button class="qty-btn" onclick="increaseQty(${index})">    
                        +
                    </button>
                </td>
                <td>₹ ${total}</td>
            </tr>
        `;
    });

    finalBill.textContent = "Total Bill : ₹ " + bill;
}
loadOrder();

function increaseQty(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].qty++;

    localStorage.setItem("cart", JSON.stringify(cart));
    loadOrder();
}

function decreaseQty(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if(cart[index].qty > 1){
        cart[index].qty--;

        localStorage.setItem("cart", JSON.stringify(cart));
        loadOrder();
    }
    else{
        alert("Minimum 1 Quantity Required...")
    }

}