// Product list
const products = [
  { id: 1, name: "Smartphone", price: 499, image: "https://th.bing.com/th/id/OIP.aOtvQFMD7a9yN4e-ltjHQwHaHa?cb=iwc1&rs=1&pid=ImgDetMain" },
  { id: 2, name: "Laptop", price: 1099, image: "https://source.unsplash.com/featured/?laptop" },
  { id: 3, name: "Wireless Headphones", price: 199, image: "https://source.unsplash.com/featured/?headphones" },
  { id: 4, name: "T-shirt", price: 25, image: "https://source.unsplash.com/featured/?tshirt" },
  { id: 5, name: "Blue Jeans", price: 45, image: "https://source.unsplash.com/featured/?jeans" },
  { id: 6, name: "Leather Jacket", price: 120, image: "https://source.unsplash.com/featured/?leather-jacket" },
  { id: 7, name: "Wrist Watch", price: 80, image: "https://source.unsplash.com/featured/?watch" },
  { id: 8, name: "Sunglasses", price: 40, image: "https://source.unsplash.com/featured/?sunglasses" },
  { id: 9, name: "Backpack", price: 60, image: "https://source.unsplash.com/featured/?backpack" },
  { id: 10, name: "Microwave Oven", price: 150, image: "https://source.unsplash.com/featured/?microwave" },
  { id: 11, name: "Blender", price: 55, image: "https://source.unsplash.com/featured/?blender" },
  { id: 12, name: "Vacuum Cleaner", price: 180, image: "https://source.unsplash.com/featured/?vacuum" }
];

// Cart array
const cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    alert(`${product.name} added to cart!`);
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const count = document.getElementById("cart-count");
  const items = document.getElementById("cart-items");
  if (count) count.textContent = cart.length;
  if (items) {
    items.innerHTML = "";
    let total = 0;
    cart.forEach(p => {
      total += p.price;
      const li = document.createElement("li");
      li.textContent = `${p.name} - $${p.price}`;
      items.appendChild(li);
    });
    const totalLi = document.createElement("li");
    totalLi.innerHTML = `<strong>Total: $${total}</strong>`;
    items.appendChild(totalLi);
  }
}

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
