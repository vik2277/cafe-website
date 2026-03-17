function placeOrder() {

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let table = "Unknown";

  // Use search params (best method)
  let params = new URLSearchParams(window.location.search);
  let t = params.get("table");

  if (t === "1" || t === "2" || t === "3") {
    table = t;
  }

  let message = "New Order (Table " + table + "):%0A";

  cart.forEach(function(item) {
    message += "- " + item + "%0A";
  });

  let phone = "916295943675";

  let url = "https://wa.me/" + phone + "?text=" + message;

  window.open(url, "_blank");
}
