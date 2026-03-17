let cart = [];

function addItem(item) {
  cart.push(item);
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cart");
  list.innerHTML = "";

  cart.forEach(function(item, index) {
    let li = document.createElement("li");
    li.innerHTML = item + " <button onclick='removeItem(" + index + ")'>Remove</button>";
    list.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function placeOrder() {

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "New Order:%0A";

  cart.forEach(function(item) {
    message += "- " + item + "%0A";
  });

  let phone = "916295943675"; // put café owner's number

  let url = "https://wa.me/" + phone + "?text=" + message;

  window.open(url, "_blank");
}