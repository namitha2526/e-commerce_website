const products = [
  { id: 1, name: "Phone", category: "electronics", price: 500 },
  { id: 2, name: "Laptop", category: "electronics", price: 1500 },
  { id: 3, name: "T-shirt", category: "fashion", price: 30 },
  { id: 4, name: "Jeans", category: "fashion", price: 60 },
  { id: 5, name: "Smartwatch", category: "electronics", price: 200 },
  { id: 6, name: "Jacket", category: "fashion", price: 120 }
];

let cart = [];

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');
const searchInput = document.getElementById('searchInput');
const checkoutButton = document.getElementById('checkoutButton');
const cartCount = document.getElementById('cart-count');

// Display products
function displayProducts(productArray) {
  productList.innerHTML = '';
  productArray.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <button class="add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Filter by category
categoryFilter.addEventListener('change', filterProducts);

// Sort by price
sortPrice.addEventListener('change', filterProducts);

// Search
searchInput.addEventListener('input', filterProducts);

// Unified filter function
function filterProducts() {
  let selectedCategory = categoryFilter.value;
  let searchQuery = searchInput.value.toLowerCase();
  let sortedProducts = [...products];

  // Filter by category
  if (selectedCategory !== 'all') {
    sortedProducts = sortedProducts.filter(p => p.category === selectedCategory);
  }

  // Search by name
  if (searchQuery) {
    sortedProducts = sortedProducts.filter(p => p.name.toLowerCase().includes(searchQuery));
  }

  // Sort
  if (sortPrice.value === 'low-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortPrice.value === 'high-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
}
const cart = [];

function addToCart(productId) {
  alert(`Product with ID ${productId} added to cart!`);
  cart.push(productId);
  console.log("Cart now:", cart);
}
// Add to cart
function addToCart(id) {
  const selectedProduct = products.find(product => product.id === id);
  cart.push(selectedProduct);
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Checkout
checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    let summary = cart.map(item => `${item.name} - $${item.price}`).join('\n');
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Cart Summary:\n${summary}\n\nTotal: $${total}\n\nProceeding to checkout...`);
    cart = []; // Empty the cart
    updateCartCount();
  }
});

// Initial load
displayProducts(products);
