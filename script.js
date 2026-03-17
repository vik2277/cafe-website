function placeOrder() {

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  // Read table number from URL
  let params = new URLSearchParams(window.location.search);
  let table = params.get("table");

  // If no table found
  if (!table) {
    table = "Unknown";
  }

  let message = "New Order (Table " + table + "):%0A";

  cart.forEach(function(item) {
    message += "- " + item + "%0A";
  });

  let phone = "916295943675"; // change to your number

  let url = "https://wa.me/" + phone + "?text=" + message;

  window.open(url, "_blank");
}
