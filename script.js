document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
// Select all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');

// Add click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get data from clicked item
        const title = item.querySelector('h4').textContent;
        const description = item.dataset.detail || "No additional details.";
        const imageSrc = item.querySelector('img').src;
        const price = item.querySelector('strong').textContent;

        // Populate modal content
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalDescription.textContent = description;
        modalPrice.textContent = `Price: ${price}`;

        // Show modal
        modal.style.display = 'flex';
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
