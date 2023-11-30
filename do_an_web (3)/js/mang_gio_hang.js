document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
});

function initializeCart() {
    let customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {
        customerId: 'your_customer_id',
        cart: [],
    };

    if (customerInfo.cart.length === 0) {
        customerInfo.cart = generateSampleProducts();
        saveCustomerInfo(customerInfo);
    }

    displayCart(customerInfo);
}

function displayCart(customerInfo) {
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-container');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCountElement = document.getElementById('cart-count');
    const productContainer = document.getElementById('product-container');

    cartCountElement.innerText = customerInfo.cart.length;

    customerInfo.cart.forEach(product => {
        const productElement = createProductElement(product);
        productContainer.appendChild(productElement);
    });

    updateTotalCost(); // Update total cost after displaying products

    checkoutBtn.addEventListener('click', paying);
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.dataset.productName = product.name;

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = 'Giá: $' + product.price.toFixed(2);

    const productQuantity = document.createElement('p');
    productQuantity.innerHTML = 'Số lượng: <span class="product-quantity" data-quantity="' + product.quantity + '">' + product.quantity + '</span>';

    const productActions = document.createElement('div');
    productActions.classList.add('product-actions');

    const increaseButton = document.createElement('button');
    increaseButton.classList.add('increase-btn');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => adjustQuantity(product, 1));

    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('decrease-btn');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => adjustQuantity(product, -1));

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQuantity);

    productActions.appendChild(increaseButton);
    productActions.appendChild(decreaseButton);

    productElement.appendChild(productImage);
    productElement.appendChild(productInfo);
    productElement.appendChild(productActions);

    return productElement;
}

function adjustQuantity(product, amount) {
    product.quantity = Math.max(1, product.quantity + amount);
    updateProductQuantity(product);
    updateTotalCost();
    updateCartCount();
}

function updateProductQuantity(product) {
    const quantityElement = document.querySelector(`.product[data-product-name="${product.name}"] .product-quantity`);
    quantityElement.textContent = product.quantity;
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
    cartCountElement.innerText = customerInfo.cart.length;
}

function updateTotalCost() {
    const totalContainer = document.getElementById('total-container');
    const customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
    totalContainer.innerText = 'Tổng cộng: $' + calculateTotal(customerInfo.cart).toFixed(2);
}

function calculateTotal(cart) {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

function paying() {
    alert("Bạn đã mua hàng!!");
}

function generateSampleProducts() {
    return [
        {
            name: 'Product 1',
            image: '../img/2a833fc3b811928b77551d164e1a12f8.jpg',
            price: 50.00,
            quantity: 1,
        },
        {
            name: 'Product 2',
            image: '../img/banhtrangbocuon.jpg',
            price: 40.00,
            quantity: 2,
        },
        {
            name: 'Product 3',
            image: '../img/met_trangtron.jpg',
            price: 35.00,
            quantity: 1,
        },
        {
            name: 'Product 4',
            image: '../img/goicuon.jpg',
            price: 60.00,
            quantity: 3,
        },
        {
            name: 'Product 5',
            image: '../img/trangnuong.jpg',
            price: 25.00,
            quantity: 1,
        },
    ];
}

function saveCustomerInfo(customerInfo) {
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
}
