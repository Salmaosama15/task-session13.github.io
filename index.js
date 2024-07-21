async function fetchProducts() {
  const response = await fetch("https://www.amazon.com/");
  const data = await response.json();
  return data;
}
function showProductDetails(productId) {
  const productDetails = products.find((product) => product.id === productId); // Find the product by ID
  if (productDetails) {
    // Display product details (name, description, price, etc.) using DOM manipulation
    document.getElementById("product-details").innerHTML = `
        <h1>${productDetails.name}</h1>
        <p>${productDetails.description}</p>
        <span>Price: $${productDetails.price}</span>
      `;
  } else {
    // Handle the case where product ID is not found
    console.error("Product not found");
  }
}
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity++; // Increase quantity if product already exists in cart
    } else {
      cart.push({ id: productId, quantity: 1 }); // Add new item to cart
    }
    updateCartDisplay(); // Update cart display after adding the product
  } else {
    console.error("Product not found");
  }
}
function searchProducts(searchTerm) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Display the filtered products list (update the DOM to show filtered results)
}
function filterProductsByType(type) {
  const filteredProducts = products.filter((product) => product.type === type);
  // Display the filtered products list (update the DOM to show filtered results)
}
