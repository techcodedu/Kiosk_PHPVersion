<div
  class="modal fade"
  id="orderModal"
  tabindex="-1"
  aria-labelledby="orderModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="orderModalLabel">Your Order</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <img
          id="productImage"
          src=""
          class="card-img-top product-image"
          alt="Product Image"
        />
        <form id="orderForm" action="/kiosk_app_php/submit_order.php" method="post">
          <input type="hidden" id="productId" name="productId" />
          <div class="mb-3">
            <label for="productName" class="form-label">Product</label>
            <input type="text" class="form-control" id="productName" readonly />
          </div>
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input
              type="number"
              class="form-control"
              id="quantity"
              min="1"
              step="1"
              value="1"
              name="quantity"
            />
          </div>
          <div class="mb-3">
            <label for="totalPrice" class="form-label">Total Price</label>
            <input
              type="text"
              class="form-control"
              id="totalPrice"
              name="totalPrice"
              readonly
            />
          </div>
          <div class="mb-3">
            <label for="mobileNumber" class="form-label">Mobile Number</label>
            <input
              type="tel"
              class="form-control"
              id="mobileNumber"
              name="mobileNumber"
              pattern="\d*"
            />
          </div>
          <button type="submit" class="btn btn-primary">Add to Order</button>
        </form>
      </div>
    </div>
  </div>
</div>
