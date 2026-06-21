document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function () {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100vw";
        popup.style.height = "100vh";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "9999";

        const largeImg = document.createElement("img");

        largeImg.src = img.src;
        largeImg.style.maxWidth = "100%";
        largeImg.style.maxHeight = "100%";
        largeImg.style.objectFit = "contain";

        popup.appendChild(largeImg);
        document.body.appendChild(popup);

        popup.onclick = () => popup.remove();
    });
});
function calculateQuote() {

    let customerName =
        document.getElementById("name").value;

    let product =
        document.getElementById("product");

    let productName =
        product.options[product.selectedIndex].text;

    let price =
        parseFloat(product.value);

    let quantity =
        parseInt(document.getElementById("quantity").value);

    let total =
        price * quantity;

    document.getElementById("customerName").textContent =
        customerName;

    document.getElementById("selectedProduct").textContent =
        productName;

    document.getElementById("qty").textContent =
        quantity;

    document.getElementById("totalPrice").textContent =
        "R" + total.toFixed(2);
}

// Navbar changes when scrolling

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background =
        "rgba(120, 225, 94, 0.95)";
    }
    else{
        navbar.style.background =
        "rgba(127, 179, 60, 0.7)";
    }

});

// Welcome message

window.onload = function(){

    console.log(
        "Welcome to Golden Egg Poultry Farm Website"
    );

};

const button = document.querySelectorAll(".order-btn");

buttons.forEach(button => {

    button.addEventListener("click", function() {

        const product =
        this.parentElement.querySelector("h3").innerText;

        alert("Thank you for ordering: " + product);

    });

})

let cartCount = 0;

const buttons = document.querySelectorAll(".order-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;
        document.getElementById("count").innerText = cartCount;

    });

});

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

document.getElementById("search")
.addEventListener("keyup", function(){

    let filter = this.value.toLowerCase();

    let cards =
    document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let text =
        card.innerText.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});


function showToast(){

    const toast =
    document.getElementById("toast");

    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

document.querySelectorAll(".order-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        showToast();

    });

});

document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all required fields.");
        return;
    }

    document.getElementById("successMessage").innerHTML =
        "✓ Thank you! Your message has been sent successfully.";

    document.getElementById("contactForm").reset();
})

let cart = [];
let total = 0;

function addToCart(product, price){

    cart.push({
        name: product,
        price: price
    });

    total += price;

    updateCart();
}

function updateCart(){

    const cartItems =
    document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(item => {

        let li =
        document.createElement("li");

        li.textContent =
        ${item.name} - R${item.price};

        cartItems.appendChild(li);

    });

    document.getElementById("total")
    .textContent = total;
}

function checkout(){

    if(cart.length === 0){

        alert("Your cart is empty!");
        return;
    }

    let orderSummary =
    "Order Summary:\n\n";

    cart.forEach(item => {

        orderSummary +=
        ${item.name} - R${item.price}\n;

    });

    orderSummary +=
  nTotal: {total};

    alert(orderSummary);

    cart = [];
    total = 0;

    updateCart();
}

function checkout(){

    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    window.location.href =
    "quotation.html";
}

const sections = document.querySelectorAll(".about-content, .mission, .vision");

window.addEventListener("scroll", () => {
    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if(sectionTop < triggerPoint){
            section.classList.add("show");
        }

    });
});

const image = document.querySelector(".about-image img");

image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
});

image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
});

const text = "Mission Statement";
let i = 0;

function typeWriter(){

    if(i < text.length){
        document.getElementById("typing-title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;


