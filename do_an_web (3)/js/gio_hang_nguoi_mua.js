 document.addEventListener('DOMContentLoaded', function () {
                const cartCount = document.getElementById('cart-count');
                const increaseBtns = document.querySelectorAll('.increase-btn');
                const decreaseBtns = document.querySelectorAll('.decrease-btn');
                const productQuantities = document.querySelectorAll('.product-quantity');

                let cartItems = 1; // Số lượng sản phẩm trong giỏ

                // Cập nhật số lượng sản phẩm và số lượng giỏ hàng
                function updateQuantity(operation, index) {
                    const currentQuantity = parseInt(productQuantities[index].dataset.quantity, 10);

                    if (operation === 'increase') {
                        cartItems++;
                        productQuantities[index].innerText = currentQuantity + 1;
                        productQuantities[index].dataset.quantity = currentQuantity + 1;
                    } else if (operation === 'decrease' && cartItems > 0 && currentQuantity > 0) {
                        cartItems--;
                        productQuantities[index].innerText = currentQuantity - 1;
                        productQuantities[index].dataset.quantity = currentQuantity - 1;
                    }

                    cartCount.innerText = cartItems;
                }

                // Xử lý sự kiện khi nút '+' được nhấn
                increaseBtns.forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        updateQuantity('increase', index);
                    });
                });

                // Xử lý sự kiện khi nút '-' được nhấn
                decreaseBtns.forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        updateQuantity('decrease', index);
                    });
                });
            });