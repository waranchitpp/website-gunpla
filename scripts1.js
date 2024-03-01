document.addEventListener("DOMContentLoaded", function() {
    // Get the "Add to Cart" button
    const addToCartBtn = document.getElementById("add-to-cart-btn");
  
    // Add click event listener to the "Add to Cart" button
    addToCartBtn.addEventListener("click", function() {
      // Get the quantity input value
      const quantity = parseInt(document.getElementById("quantity").value);
  
      // Check if the quantity is valid (greater than 0)
      if (quantity > 0) {
        // Show an alert message with the quantity added to the cart
        alert(`${quantity} item(s) added to cart.`);
      } else {
        // Show an alert message if the quantity is not valid
        alert("Please enter a valid quantity.");
      }
    });
  });
  