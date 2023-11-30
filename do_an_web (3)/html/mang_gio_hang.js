function showCartForm() {
    var loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert('Vui lòng đăng nhập để mua hàng!');
        return false;
    }

    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    CartArr = JSON.parse(localStorage.getItem('cart'))|| [];
    tempArr = JSON.parse(localStorage.getItem('tempArr')) || [];

    if (!CartArr || CartArr.length === 0) {
        CartArr.push({ userId: userLogin.userId, cart: [] });
    }

    var foundUser = false;

    for (var i = 0; i < CartArr.length; i++) {
        if (CartArr[i].userId === userLogin.userId) {
            foundUser = true;

            for (var k = 0; k < tempArr.length; k++) {
                var existingProduct = CartArr[i].cart.find(item => item.name === tempArr[k].name);

                if (existingProduct) {
                    existingProduct.quantity = (parseInt(existingProduct.quantity) + parseInt(tempArr[k].quantity)).toString();
                } else {
                    CartArr[i].cart.push(tempArr[k]);
                }
            }
            break;
        }
    }

    if (!foundUser) {
        CartArr.push({ userId: userLogin.userId, cart: tempArr });
    }
    localStorage.setItem('cart', JSON.stringify(CartArr));
    tempArr=[];
    localStorage.setItem('tempArr',JSON.stringify(tempArr));
    
    //document.getElementById('formCart').style.display = "block";
    displayCartForm();
}
function displayCartForm()
{    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    var CartArr = JSON.parse(localStorage.getItem('cart'));
    var sum = 0;
    for (var i = 0; i < CartArr.length; i++) {
        if (CartArr[i].userId === userLogin.userId) {
            for (var k = 0; k < CartArr[i].cart.length; k++) {
                sum += CartArr[i].cart[k].price * parseInt(CartArr[i].cart[k].quantity);
            }
        }
    }
    var s = '<div id="cart-container">' +
    '<div id="cart-title">Giỏ hàng' +
    '<button id="close-cartForm" onclick="closeCartForm()">X</button></div>';
    var t="";
    for(i=0;i<CartArr.length;i++){
        if(CartArr[i].userId == userLogin.userId){
            for(k=0;k<CartArr[i].cart.length;k++){
                t += `<div id="product-container">
                    <div class="product">
                        <img src="${CartArr[i].cart[k].img}" alt="Product 1">
                        <div class="product-info">
                            <h3>${CartArr[i].cart[k].name}</h3>
                            <p>Giá: ${CartArr[i].cart[k].price} VND</p>
                            <p>Số lượng: <span class="product-quantity" data-quantity="1">${CartArr[i].cart[k].quantity}</span></p>
                        </div>
                        <div class="product-actions-formcart">
                            <button class="increase-btn" onclick="adjustQuantity(${i}, 1,${k})">+</button>
<button class="decrease-btn" onclick="adjustQuantity(${i}, -1,${k})">-</button>
                            <button class="delete-btn" onclick='deletebtn(${k})'>xóa</button>
                        </div>
                    </div>
                </div>`;
            }
            s += t+ `<div id="total-conta iner">Tổng cộng: ${sum}</div>
                <div id="checkout-btn" onclick="showBill();">Đặt hàng</div>
            </div>`  
        }
    }
    document.getElementById('formCart').innerHTML = s;
}
function adjustQuantity(productIndex, amount, cartIndex) {
    CartArr = JSON.parse(localStorage.getItem('cart'));

    // Ensure the productIndex is within a valid range

    // Get the current quantity
    var quantity1 = parseInt(CartArr[productIndex].cart[cartIndex].quantity);

    // Update the quantity by a fixed value based on the sign of the amount
    quantity1 = Math.max(0, quantity1 + (amount > 0 ? 1 : -1));

    // Update the quantity in the cart array
    CartArr[productIndex].cart[cartIndex].quantity = quantity1.toString();

    // If the quantity becomes 0, remove the product from the cart
    if (quantity1 === 0) {
        CartArr[productIndex].cart.splice(cartIndex, 1);

        // If there are no items in the cart for the current user, remove the user entry
        if (CartArr[productIndex].cart.length === 0) {
            CartArr.splice(productIndex, 1);
        }
    }

    // Save the updated cart data
    localStorage.setItem('cart', JSON.stringify(CartArr));

    // Refresh the cart display by calling showCartForm
    displayCartForm();
}
function deletebtn(cartIndex)
{
    var CartArr=JSON.parse(localStorage.getItem('cart'));
    CartArr[cartIndex].cart.splice(cartIndex, 1);
    //localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(CartArr));
    displayCartForm();
}function closeCartForm()
    {
    window.location.href='./base.html';
    }
//Hien thi don hang cua khach hang 
function showBill(e){
    // var tempArr = JSON.parse(localStorage.getItem('tempArr'));
    CartArr = JSON.parse(localStorage.getItem('cart'));


    var userLogin= JSON.parse(localStorage.getItem('userLogin')); // Lay thong tin dang nhap cua user
    var s=`<div class="wrapper">
        <div class="formdon">
        <div class="header-formdon">
            <p class="nameform">Thông tin đơn hàng</p>
            <div class="close-formdon" onclick="hidebill();">
                <i class=" icon-close fas fa-window-close"></i>
            </div>
        </div>
        <div class="ttinkhach-formdon">
            <div>Địa chỉ : ${userLogin.address}</div>
            <div>Tên KH : ${userLogin.fullname}</div>
            <div>SĐT : ${userLogin.phonenumber}</div>
            <div></div>
        </div>
        <div class="ttinvanchuyen-formdon">
            <div>Thông tin vận chuyển</div>
            <div>Giao hàng nhanh</div>
        </div>

        <div class="ttin-don-hang-formdon">

            <div class="donhang">
                <div>Đơn hàng gồm</div>
                <div>SL</div>
            </div>

            <div class="sanpham">`;
    var t='';

    // //Lay mang gio hang
    if(CartArr){

        var ngayHienTai = new Date();
        var ngayThangNam = ngayHienTai.toLocaleDateString();


        //Duyet mang gio hang de dua san pham vao 
        var tongtien=0;
        
        for(i=0;i<CartArr.length;i++)
        {
            if(CartArr[i].userId == userLogin.userId){
                for(k=0;k<CartArr[i].cart.length;k++){
                    tongtien += CartArr[i].cart[k].price * CartArr[i].cart[k].quantity;
                }
            }

        }
        
        for(i=0;i<CartArr.length;i++){
            if(CartArr[i].userId == userLogin.userId){
                for(k=0;k<CartArr[i].cart.length;k++){


                    t+=`<div class="item">
                    <div>${CartArr[i].cart[k].name}</div> 
                    <span>${CartArr[i].cart[k].quantity}</span>
                    </div>`;


                }
         
        }

        
    }
}
    var thanhtien = tongtien;

    // t=`<div class="item">
    //         <div>1.Bánh tráng phơi sương</div> 
    //         <span>1</span>
    //         </div>`;


    s=s+t+`</div>
                        
    <div class="ordertime">
        <div>Ngày đặt : ${ngayThangNam}</div>
    </div>    

    <div class="thanhtien">

        <div>Thành tiền : ${thanhtien} VND</div>
    </div>
    

    </div>

    <div id="btn-muahang">
        <button type="button" class="btn-muahang-text" onclick="Xulydonhang();" >Đặt Hàng</button>
    </div>
    

    </div>
    </div> `;
    var formdonhang = document.querySelector('.modal-donhang');
    formdonhang.innerHTML = s;
    if(formdonhang.style.display == 'none'){
        formdonhang.style.display = 'block';
    }

    
}

function Xulydonhang(){
    
    alert('Đơn hàng của bạn đã được xác nhận !');
    var subArr = JSON.parse(localStorage.getItem('subarr'));
    var info='';
    var totalprice=0;
    if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === '[]')
    {
        return false;
    }
    var CartArr = JSON.parse(localStorage.getItem('cart'));
    for (var i =0; i< CartArr.length ;i++)
    for(var k =0; k < CartArr[i].cart.length;k++){
    {
        info+=CartArr[i].cart[k].quantity+' x '+CartArr[i].cart[k].name+';';
        totalprice +=CartArr[i].cart[k].quantity*CartArr[i].cart[k].price;
    }}
    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    var date = new Date();
    var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, userId: userLogin.userId, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length, info: info, totalprice: totalprice, userId: userLogin.userId, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
    localStorage.setItem('subarr', localStorage.getItem('cart'));
    localStorage.removeItem('cart');
    localStorage.removeItem('tempArr');
    window.location.href='./base.html';
}
var subArr = [];
JSON.parse(localStorage.setItem('subarr', JSON.stringify(subArr)));
//Dong don hang cua khach hang 

    
function hidebill(){
        var formdonhang = document.querySelector('.modal-donhang');
        if(formdonhang.style.display == 'block'){
        formdonhang.style.display = 'none';
        }
}


/*var customerID;
let giohang = [
    {
        name: 'Bánh tráng phơi sương 1',
        image: './banhtrangphoisuong.jpg',
        price: 50.00,
        quantity: 1,
    },
    {
        name: 'Bánh tráng phơi sương 2',
        image: './banhtrangphoisuong.jpg',
        price: 50.00,
        quantity: 1,
    },
    {
        name: 'Bánh tráng phơi sương 3',
        image: './banhtrangphoisuong.jpg',
        price: 50.00,
        quantity: 1,
    },
    {
        name: 'Bánh tráng phơi sương 4',
        image: './banhtrangphoisuong.jpg',
        price: 50.00,
        quantity: 1,
    },
    {
        name: 'Bánh tráng phơi sương 5',
        image: './banhtrangphoisuong.jpg',
        price: 50.00,
        quantity: 1,
    },
    {
        name: 'Bánh tráng abcxyz gì đó',
        image: './do_an_web/img/banhtrangsieucay.jpg',
        price: 50.00,
        quantity: 1,
    },
];

document.addEventListener('DOMContentLoaded', () => {
    initialize();
});

function initialize() {
    let manggiohang = JSON.parse(localStorage.getItem('manggiohang')) || {
        customerId: customerID,
        cart: giohang || [],
    };
    manggiohang.cart = manggiohang.cart || []; // Ensure manggiohang.cart is initialized as an array
    displayCart(manggiohang);

    // Call the update functions after displaying the cart
    updateTotalCost();
    updateCartCount();
}


function displayCart(manggiohang) {
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-container');
    const cartCountElement = document.getElementById('cart-count');
    const productContainer = document.getElementById('product-container');

    if (manggiohang && manggiohang.cart) {
        cartCountElement.innerText = manggiohang.cart.length;

        manggiohang.cart.forEach(product => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        });

        updateTotalCost();
    } else {
        // Handle the case where manggiohang or manggiohang.cart is undefined
        cartCountElement.innerText = '0';
        totalContainer.innerText = 'Không có sản phẩm trong giỏ hàng';
    }
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
    // Check if product.price is defined before using toFixed
    productPrice.textContent = 'Giá: $' + (product.price ? product.price.toFixed(2) : 'N/A');

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
*/
// function adjustQuantity(productIndex, amount) {
//     CartArr = JSON.parse(localStorage.getItem('tempArr'));
//     // Ensure the productIndex is within valid range
//     const product = CartArr[productIndex];
//     // Update the quantity directly
//     product.quantity = Math.max(1, product.cart.quantity + amount);
//     // If the quantity becomes 0, remove the product from the cart
//     if (product.cart.quantity === 0) {
//         CartArr.splice(productIndex, 1);
//     }
//     // Save the cart data after adjusting quantity
//     localStorage.setItem('tempArr', JSON.stringify(CartArr));
//     // Refresh the cart display by calling showCartForm
//     showCartForm();
// }

// function deletebtn(productIndex) {
//     adjustQuantity(productIndex, -1);
// }

/*
function updateProductQuantity(product) {
    const quantityElement = document.querySelector(`.product[data-product-name="${product.name}"] .product-quantity`);
    quantityElement.textContent = product.quantity;
}

function updateTotalCost() {
    const totalContainer = document.getElementById('total-container');
    const manggiohang = JSON.parse(localStorage.getItem('manggiohang'));

    if (manggiohang && manggiohang.cart) {
        totalContainer.innerText = 'Tổng cộng: $' + calculateTotal(manggiohang.cart).toFixed(2);
    } else {
        totalContainer.innerText = 'Không có sản phẩm trong giỏ hàng';
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const manggiohang = JSON.parse(localStorage.getItem('manggiohang'));

    if (manggiohang && manggiohang.cart) {
        cartCountElement.innerText = manggiohang.cart.length;
    } else {
        cartCountElement.innerText = '0';
    }
}

function calculateTotal(cart) {
    if (cart && Array.isArray(cart)) {
        return cart.reduce((total, product) => {
            const productTotal = (product.price || 0) * (product.quantity || 0);
            return total + productTotal;
        }, 0);
    } else {
        return 0;
    }
}

function paying() {
    alert("Bạn đã mua hàng!!");
}

function getCurrentCartData() {
    const productElements = document.querySelectorAll('.product');
    const currentCartData = [];

    productElements.forEach(productElement => {
        const productName = productElement.dataset.productName;
        const productImage = productElement.querySelector('img').src;
        const productPrice = parseFloat(productElement.querySelector('.product-info p').textContent.replace('Giá: $', '')); // Extract the price from the text
        const productQuantity = parseInt(productElement.querySelector('.product-quantity').textContent, 10);

        const product = {
            name: productName,
            image: productImage,
            price: productPrice,
            quantity: productQuantity,
        };

        currentCartData.push(product);
    });

    return {
        customerId: customerID,
        cart: currentCartData,
    };
}
console.log(localStorage.getItem('manggiohang'));*/
