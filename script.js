/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from the
  fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("main-image").src = data.product.images[0].src;
      document.getElementById("product-title").innerText = data.product.title;
      document.getElementById("product-description").innerHTML =
        data.product.description;
      document.getElementById("product-vendor").innerText = data.product.vendor;
      document.getElementById("product-type").innerText =
        "Type: " + data.product.product_type;
      document.getElementById("product-price").innerText = data.product.price;
      document.getElementById(
        "product-price"
      ).innerHTML += ` <span style="color: #ff9999;">  35% Off</span>`;

      document.getElementById("product-compare-price").innerText =
        data.product.compare_at_price;

      // Populate color options
      const colorSelect = document.getElementById("color");
      data.product.options[0].values.forEach((color) => {
        const option = document.createElement("option");
        option.value = Object.keys(color)[0];
        option.innerText = Object.keys(color)[0];
        colorSelect.appendChild(option);
      });

      // Populate size options
      const sizeSelect = document.getElementById("size");
      data.product.options[1].values.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.innerText = size;
        sizeSelect.appendChild(option);
      });

      // Populate thumbnail images
      const thumbnailContainer = document.getElementById("thumbnail-container");
      data.product.images.forEach((image, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = image.src;
        thumbnail.alt = "Thumbnail " + (index + 1);
        thumbnail.onclick = () => {
          document.getElementById("main-image").src = image.src;
        };
        thumbnailContainer.appendChild(thumbnail);
      });
    });
});

function addToCart() {
  const selectedColor = document.getElementById("color").value;
  const selectedSize = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;

  document.getElementById(
    "cart-message"
  ).innerText = `Embrace Sideboard with ${selectedColor} color, size ${selectedSize} added to cart.`;

  // Show cart message
  document.getElementById("cart-message").style.display = "block";

  // Hide cart message after 5 sec
  setTimeout(() => {
    document.getElementById("cart-message").style.display = "none";
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from the sample API (replace with your actual API endpoint)
  fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
  )
    .then((response) => response.json())
    .then((data) => {});
});

let counterValue = 1;

function updateCounter(value) {
  counterValue += value;
  if (counterValue < 1) {
    counterValue = 1;
  }
  document.getElementById("quantity").innerText = counterValue;
}
