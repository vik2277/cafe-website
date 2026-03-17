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

  let params = new URLSearchParams(window.location.search);
  let table = params.get("table") || "Unknown";

  let message = "New Order (Table " + table + "):\n";

  cart.forEach(function(item) {
    message += "- " + item + "\n";
  });

  let phone = "919876543210";

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
