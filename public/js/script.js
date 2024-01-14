let totalCost = 0;

function updateTotalCostDisplay() {
  const totalCostdisplay = document.querySelector("#totalCost");
  totalCostdisplay.innerText = totalCost.toFixed(2);
}
function addItemToCart(price) {
  totalCost += parseFloat(price);
  updateTotalCostDisplay();
}
// modal image
function showImageinModal(imgUrl) {
  document.querySelector("#modalImage").src = imgUrl;
}
// modal for order
function setupModal(button) {
  const orderModal = document.getElementById("orderModal");
  const productNameInput = orderModal.querySelector("#productName");
  const productIdInput = orderModal.querySelector("#productId");
  const quantityInput = orderModal.querySelector("#quantity");
  const totalPriceInput = orderModal.querySelector("#totalPrice");
  const productImage = orderModal.querySelector("#productImage");

  productNameInput.value = button.dataset.name;
  productImage.src = button.dataset.image;
  productIdInput.value = button.dataset.id;
  const price = parseFloat(button.dataset.price);
  const unit = button.dataset.unit;
  quantityInput.value = "1"; // Default value for both kg and pc
  quantityInput.min = unit === "kg" ? "0.01" : "1"; // Minimum value based on unit
  quantityInput.step = unit === "kg" ? "0.01" : "1"; // Step value based on unit
  totalPriceInput.value = price.toFixed(2);

  quantityInput.oninput = () => {
    totalPriceInput.value = (parseFloat(quantityInput.value) * price).toFixed(
      2
    );
  };
}

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the normal form submission

    var formData = new FormData(this);

    fetch("/kiosk_app_php/public/submit_order.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Order submitted successfully.");
          window.location.href = data.redirect;
        } else {
          alert("There was an error submitting your order: " + data.error);
        }
      })
      .catch((error) => {
        alert("There was an error submitting your order: " + error.message);
      });
  });
