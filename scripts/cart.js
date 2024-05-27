var quantityParagraph = document.getElementById("quantity-p");
var subtotalParagraph = document.getElementById("subtotal");
var totalParagraph = document.getElementById("total");


const productPrice = 60;
let productQuantity = 1;
let deliveryPrice = 10;

function quantityIncrease(){
    if(productQuantity < 100){
        productQuantity++;
    }

    let subtotalPrice = productQuantity * productPrice;
    let finalPrice = subtotalPrice + deliveryPrice;

    quantityParagraph.innerHTML = productQuantity;
    subtotalParagraph.innerHTML = "$" + subtotalPrice;
    totalParagraph.innerHTML = "$" + finalPrice;
}

function quantityDecrease(){
    if(productQuantity > 1){
        productQuantity--;
    }

    let subtotalPrice = productQuantity * productPrice;
    let finalPrice = subtotalPrice + deliveryPrice;

    quantityParagraph.innerHTML = productQuantity;
    subtotalParagraph.innerHTML = "$" + subtotalPrice;
    totalParagraph.innerHTML = "$" + finalPrice;
}


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('#orderForm input');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (allFilled) {
        showMessage('.delivery-successfull');
    } else {
        showMessage('.invalid-data');
    }
});

function showMessage(selector) {
    const messageElement = document.querySelector(selector);
    messageElement.style.display = 'block';
    clearInputs();

    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 4000);
}

function clearInputs() {
    const inputs = document.querySelectorAll('#orderForm input');
    inputs.forEach(input => {
        input.value = '';
    });

    
    quantityParagraph.innerHTML = 1;
    subtotalParagraph.innerHTML = "$" + 60;
    totalParagraph.innerHTML = "$" + 70;
}