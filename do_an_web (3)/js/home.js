 

function home(){
    var s=` <div class="contentitem">`;
    var t="";
    var productArray = JSON.parse(localStorage.getItem('product'));
    for( i = 0;i<productArray.length;i++){
        t+=`<div class="itemframe">
                <img class="item" src="${productArray[i].img}">
                <h5 id="name"><strong>${productArray[i].name}</strong></h5>
                <hr>
                <button id="cart-btn" href="#">Add to card</button>
                <button class="btn-view" href="#" onClick="showProductInfo('${productArray[i].productId}')">View</button>
                <br />
                <h4 style="float: right">${productArray[i].price} VND</h4>
            </div>`;
    }
    
    s=s+t+`</div>`;
    document.getElementById("head_container").innerHTML=s;
}

//HIEN THI SAN PHAM PHAN TRANG 

document.addEventListener('DOMContentLoaded', function () {

    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 4; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;

    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const currentProducts = productArray.slice(startIndex, endIndex);

        var s=` <div class="contentitem">`;
        var t="";
        
        for( i = 0;i<currentProducts.length;i++){
            t+=`<div class="itemframe">
                <img class="item" src="${currentProducts[i].img}">
                <h5 id="name"><strong>${currentProducts[i].name}</strong></h5>
                <hr>
                
                <button class="btn-view" href="#" onClick="showProductInfo('${currentProducts[i].productId}')">View</button>
                <br />
                <h4 style="float: right">${currentProducts[i].price} VND</h4>
            </div>`;
        }
    
        s=s+t+`</div>`;
        document.getElementById("head_container").innerHTML=s;
        
    }

    function displayPagination() {
        const totalPages = Math.ceil(productArray.length / productsPerPage);
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);
        }
    }

    displayProducts(currentPage);
    displayPagination();
});


function hienthisanpham(){

    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 3; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;

    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const currentProducts = productArray.slice(startIndex, endIndex);


    var s=` <div class="contentitem">`;
    var t="";
    
    document.getElementById('text').innerHTML = `<h5><strong>CÁC LOẠI BÁNH TRÁNG</strong></h5>;`
    for( i = 0;i<currentProducts.length;i++){
        if(currentProducts[i].typeID == 'banhtrang'){
            t+=`<div class="itemframe">
            <img class="item" src="${currentProducts[i].img}">
            <h5 id="name"><strong>${currentProducts[i].name}</strong></h5>
            <hr>
            
            <button class="btn-view" href="#" onClick="showProductInfo('${currentProducts[i].productId}')">View</button>
            <br />
            <h4 style="float: right">${currentProducts[i].price} VND</h4>
        </div>`;
        }
    }

    s=s+t+`</div>`;
    document.getElementById("head_container").innerHTML=s;

    }   

    function displayPagination() {
        const totalPages = Math.ceil(productArray.length / productsPerPage);
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);
        }
    }

    displayProducts(currentPage);
    displayPagination();

}
function hienthisanpham1(){


    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 3; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;

    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const currentProducts = productArray.slice(startIndex, endIndex);
    
        var s=` <div class="contentitem">`;
        var t="";
    
        document.getElementById('text').innerHTML = `<div id="text" style="text-align: center; margin-top: 20px;"><h5><strong>COMBO BÁNH TRÁNG</strong></h5></div>;`
        for( i = 0;i<currentProducts.length;i++){
        if(currentProducts[i].typeID == 'combo'){
            t+=`<div class="itemframe">
            <img class="item" src="${currentProducts[i].img}">
            <h5 id="name"><strong>${currentProducts[i].name}</strong></h5>
            <hr>
            
            <button class="btn-view" href="#" onClick="showProductInfo('${currentProducts[i].productId}')">View</button>
            <br />
            <h4 style="float: right">${currentProducts[i].price} VND</h4>
        </div>`;
        }
        }

        s=s+t+`</div>`;
        document.getElementById("head_container").innerHTML=s;

    }

    function displayPagination() {
        const totalPages = Math.ceil(productArray.length / productsPerPage);
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);
        }
    }

    displayProducts(currentPage);
    displayPagination();


}

//SEARCH
function showSearch(){
    document.querySelector('.container-search').style.display='block';
}
function closeSearch(){
    document.querySelector('.container-search').style.display='none';
}
function search(){
    var searchProduct = document.getElementById('search').value.toLowerCase();
    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 3; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;
    
    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        // const currentProducts = productArray.slice(startIndex, endIndex);
        const currentProducts= [];
        var s = '';
        //Duyệt qua mảng tổng để tìm kiếm những sp như yêu cầu và lưu vào mảng currentProducts
        for(i =0; i<productArray.length;i++){
            if((productArray[i].name.toLowerCase().search(searchProduct) != -1) && searchProduct != ''){
                 currentProducts.push(productArray[i]);
                 
            }
            else{
                var typeSearch= document.getElementById('type-search').value;
                var fromPrice = document.getElementById('price-from').value;
                var toPrice = document.getElementById('to-price').value;
                if(typeSearch === "all-type"){
                    for(i =0; i<productArray.length;i++){
                        if(productArray[i].name.toLowerCase().search(searchProduct) != -1 && productArray[i].price >= fromPrice && productArray[i].price <= toPrice)
                        {
                            
                            currentProducts.push(productArray[i]);
                            
                    
                        }
                    }
                }
                else{
                    for(i =0; i<productArray.length;i++){
                        if(productArray[i].name.toLowerCase().search(searchProduct) != -1 && productArray[i].typeID === typeSearch && productArray[i].price >= fromPrice && productArray[i].price <= toPrice) 
                        {
                            
                            currentProducts.push(productArray[i]);
                        
                        }
                    }
                }
            }
        }

        localStorage.setItem('currentProducts', JSON.stringify(currentProducts)); //Đưa mảng currentProducts lên local 
        const products = currentProducts.slice(startIndex, endIndex); // Tiến hành phân trang 
        for(i=0;i<products.length;i++){
            s+= `<div class="itemframe">
                         <img class="item" src="${products[i].img}">
                         <h5 id="name"><strong>${products[i].name}</strong></h5>
                         <hr>
                        
                         <button class="btn-view" href="#" onClick="showProductInfo('${products[i].productId}')">View</button>
                         <br />
                         <h4 style="float: right">${products[i].price} VND</h4>
                     </div>`;
        }
        document.getElementById('search-result').innerHTML = s;
    }

    function displayPagination(e) {
        event.preventDefault();
        var currentProducts = JSON.parse(localStorage.getItem('currentProducts')); //Lấy mảng currentProducts từ local
        const totalPages = Math.ceil(currentProducts.length / productsPerPage); //Số lượng trang 
        const paginationContainer = document.getElementById('pagination-container2');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination2';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);
        }
    }

    displayProducts(currentPage);
    displayPagination();

    
}

function showProductInfo(id){
    document.getElementById('product-details').style.display ='block';
    var productArray = JSON.parse(localStorage.getItem('product'));
    var s = `<div  id="test">`;
    var t="";
    for(i=0;i<productArray.length;i++){
        if(productArray[i].productId == id){
            t += `<div id="info">
                <div class="left">
                <img id="image"src="${productArray[i].img}"/>
                </div>
                <div class="right">
                    <h4 id="productname">${productArray[i].name}</h4>
                    <h5 id="productid">${productArray[i].productId}</h5>
                    <p>${productArray[i].mota}</p>
                    <h4 id="productprice">${productArray[i].price} VND</h4>
                    <br /><br />
                    <h4>Số lượng: </h4>
                    <button class="quantityDown" onclick="quantitydown()">-</button><input type="text" id="quantity" value="1"><button class="quantityUp" onclick="quantityup()" >+</button>
                    <button class="btn-cart" href="#" onclick="addToCart('${productArray[i].productId}')">Thêm vào giỏ hàng</button>
                    <br />
                    <div style="margin-top: 10px; color: red; cursor: pointer; display: flex ; justify-content: center;" onclick="closeProductInfo()">Quay lại trang chủ</div>
                    
                    </div>
                </div>`;
        }
        
    }
    s += t + '</div>';
    document.getElementById('test').innerHTML = s;
    // for( i =0;i<productArray.length;i++){
    //     if(productArray[i].productId === id){
    //         document.getElementById('productname').innerHTML = productArray[i].name;
    //         document.getElementById('productid').innerHTML = `ID: ${productArray[i].productId}`;
    //         document.getElementById('image').src = productArray[i].img;
    //         document.getElementById('productprice').innerHTML = 'Giá: '+productArray[i].price+' VDN';
    //     }
    // }
}

var tempArr=[];
function addToCart(id){
    var loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert('Vui lòng đăng nhập để mua hàng!');
        return false;
    }
    var productArray = JSON.parse(localStorage.getItem('product'));
    for(i=0;i<productArray.length;i++){
        if(productArray[i].productId == id){
            tempArr.push(productArray[i]);
        }
    }
    tempArr[tempArr.length-1].quantity = (document.getElementById('quantity').value);
    localStorage.setItem('tempArr', JSON.stringify(tempArr));
    alert('Đã thêm vào giỏ hàng.');
}

// var CartArr=[];
// localStorage.setItem('cart',JSON.stringify(CartArr));
// //var CartArr = JSON.parse(localStorage.getItem('cart')) ||[];
// function showCartForm(){
//     console.log('hi0');
//     document.getElementById('text').style.display = 'none';
//     var tempArr = JSON.parse(localStorage.getItem('tempArr'));
//     var userLogin = JSON.parse(localStorage.getItem('userLogin'));
//     var CartArr = JSON.parse(localStorage.getItem('cart'));
//     var x={userId: userLogin.userId, cart: tempArr};
//     CartArr.push(x);
//     // for(i=0;i<(CartArr.length+1);i++){
//     //     console.log('hi0');
//     //     CartArr[i].push(x);
//     //     // CartArr[i].userId = userLogin.userId;
//     //     // CartArr[i].cart = tempArr;
//     // }
//     localStorage.setItem('cart', JSON.stringify(CartArr));
//     //tempArr = [];
//     //localStorage.setItem('tempArr',JSON.stringify(tempArr));
//     var CartArr = JSON.parse(localStorage.getItem('cart'));
//     var sum = 0;
//     for(i=0;i<CartArr.length;i++){
//         if(CartArr[i].userId == userLogin.userId){
//             for(k=0;k<CartArr[i].cart.length;k++){
//                 sum += CartArr[i].cart[k].price * CartArr[i].cart[k].quantity;
//             }
//         }
//     }
//     var s=`<div id="cart-container">
//             <div id="cart-title">Giỏ hàng của user<span id="customer-id">${userLogin.userId}</span><span id="cart-count"></span></div>
//             <div id="product-container">`;
//     var t="";
//     for(i=0;i<CartArr.length;i++){
//         t += `<div class="product">
//                 <img src="${CartArr[i].img}">
//                 <div class="product-info">
//                     <h3>${CartArr[i].name}</h3>
//                     <p>Giá: ${CartArr[i].price} VND</p>
//                     <p>Số lượng: ${CartArr[i].quantity}</p>
//                 </div>
//                 <div class="product-actions">
//                     <button class="increase-btn">+</button>
//                     <button class="desrease-btn">-</button>
//                 </div>
//             </div>`
//     }
//     s += t+`</div>
//     <div id="total-container">Tổng cộng: ${sum}</div>
//     <div id="checkout-btn" onclick="paying()">Thanh toán</div>`;
//     document.getElementById('formCart').style.display = "block";
//     document.getElementById('formCart').innerHTML = s;
// }





function closeProductInfo(){
    document.getElementById('product-details').style.display = 'none';
}
function quantitydown(){
    if(document.getElementById('quantity').value > 1){
        document.getElementById('quantity').value--;
    }
}
function quantityup(){
   
    document.getElementById('quantity').value++;
    
}


function showContact(){
    document.getElementById('text').style.display = 'none';
    var t =`

                <div class="feedback">
                    <div class="user-feedback">
                        <img src="" alt="">
                        <label for="" class="label-feedback"><strong>Contact with us:</strong></label>    
                    </div>
                    <div class="content-feedback">
                        <li class="contact"><span><b>Facebook: </b></span><span>Tiệm bánh tráng</span></li>
                        <li class="contact"><span><b>Instagram: </b></span><span>@tiem_banhtrang</span></li>
                        <li class="contact"><span><b>Hotline: </b></span><span>1800 1100</span></li>
                    </div>
                </div>
            `;
    document.getElementById('head_container').innerHTML=t;

}
            // function showCartForm(){
            //     document.getElementById('text').style.display = 'none';
            //     var t=` <div id="cart-container">
            //     <div id="cart-title">Giỏ hàng của user<span id="cart-count"></span></div>

            //     <div id="product-container">
            //         <!-- Sample product elements will be added dynamically here -->
            //     </div>
            
            //     <div id="total-container">Tổng cộng: $0.00</div>
            //     <div id="checkout-btn" onclick="paying()">Thanh toán</div>
            // </div>`;
            // document.getElementById('head_container').innerHTML=t;
            // }
function showFeedback(){
    document.getElementById('text').style.display = 'none';
    var t =`
            <div id="content1">
            <div id="container1">

                <div class="feedback1">
                    <div class="user-feedback1">
                        <img src="" alt="">
                        <label for="" class="label-feedback">@nguoidung1</label>    
                    </div>
                    <div class="content-feedback1">
                        <p> Bánh tráng phơi sương này có vị thơm ngon và đặc trưng của gạo, kết hợp với hương sương tự nhiên, tạo nên một trải nghiệm ẩm ướt và thơm ngon.Bánh tráng có độ giòn vừa đủ, không quá cứng nhưng cũng không quá mềm. Khi nhai, bạn cảm nhận được sự giòn rụt và thú vị.</p>
                    </div>
                </div>

                <div class="feedback1">
                    <div class="user-feedback1">
                        <img src="" alt="">
                        <label for="" class="label-feedback">@nguoidung2</label>    
                    </div>
                    <div class="content-feedback1">
                        <p>Bánh tráng muối này có vị muối vừa phải, không quá mặn nhưng đủ để làm nổi bật hương vị tự nhiên của gạo. Vị muối làm cho bánh tráng trở nên thú vị và độc đáo.Lớp bánh tráng muối được cắt mỏng và phân phối đều, tạo nên một sản phẩm có hình dạng đẹp mắt và dễ sử dụng</p>
                    </div>
                </div>

                <div class="feedback1">
                    <div class="user-feedback1">
                        <img src="" alt="">
                        <label for="" class="label-feedback">@nguoidung3</label>    
                    </div>
                    <div class="content-feedback1">
                        <p>Bánh tráng trộn này là lựa chọn tuyệt vời cho những người muốn thử nghiệm với ẩm thực độc đáo. Nó có thể làm món ăn nhẹ hoặc một loại snack độc đáo để chia sẻ trong các buổi gặp mặt.Sản phẩm này không chỉ ngon về vị mà còn có hương thơm hấp dẫn. Khi mở bao, bạn sẽ ngửi thấy hương của các gia vị và nguyên liệu tự nhiên, tạo nên sự hứng thú trước khi thưởng thức.</p>
                    </div>
                </div>
            </div>


                
        </div>
       `;
    document.getElementById('head_container').innerHTML=t;

}
function theodoidonhang(){
    document.getElementById('theodoidonhang').style.display='block';

}
function closetheodoidonhang(){
    document.getElementById('theodoidonhang').style.display='none';
    
}




//END searh
/* gio hang */
// function showCartTable(){
// 	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
// 		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
// 		document.getElementById('carttable').innerHTML=s;
// 		document.getElementById('totalprice').innerHTML=0;
// 	}else {
// 		var cartArray = JSON.parse(localStorage.getItem('cart'));
// 		var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
// 		var totalprice=0;
// 		for (var i = 0; i < cartArray.length; i++){
// 			s+=  '<tr>'+
// 					'<td><img src="../'+cartArray[i].img+'"></td>'+
// 					'<td>'+
// 						'<div>'+cartArray[i].name+'</div>'+
// 						'<div>Size: '+cartArray[i].size+'</div>'+
// 					'</td>'+
// 					'<td>'+currency(cartArray[i].price)+'</td>'+
// 					'<td>'+
// 						'<button onClick="quantitydown2('+cartArray[i].productId+')">-</button>'+
// 						'<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productId+')">'+
// 						'<button onClick="quantityup2('+cartArray[i].productId+')">+</button>'+
// 					'</td>'+
// 					'<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+
// 					'<td><button onClick="deletecartitem('+cartArray[i].productId+')">&times;</buttom></td>'+
// 				'</tr>';
// 			totalprice+=cartArray[i].price*cartArray[i].quantity;
// 		}
// 		document.getElementById('carttable').innerHTML=s;
// 		document.getElementById('totalprice').innerHTML=currency(totalprice);
// 	}	
// }
// function deletecartitem(id){
// 	var cartArray = JSON.parse(localStorage.getItem('cart'));
// 	for (var i = 0; i < cartArray.length; i++) {
// 		if(cartArray[i].productId==id){
// 			cartArray.splice(i, 1);
// 		}
// 	}
// 	localStorage.setItem('cart',JSON.stringify(cartArray));
// 	showCartTable();
// }
// function deletecart(){
// 	localStorage.removeItem('cart');
// 	showCartTable();
// }
// function updateCart(quantity,id){
// 	var cartArray = JSON.parse(localStorage.getItem('cart'));
// 	for (var i = 0; i < cartArray.length; i++) {
// 		if(cartArray[i].productId==id){
// 			cartArray[i].quantity=quantity;
// 		}
// 	}
// 	localStorage.setItem('cart',JSON.stringify(cartArray));
// 	showCartTable();
// }
/*function addToCart(productid1) {
    var loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert('Vui lòng đăng nhập để mua hàng!');
    }
    var productArray = JSON.parse(localStorage.getItem('product'));
    var quantity = document.getElementById('quantity').value;
    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    var producttemp;

    // Find the selected product in the productArray
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id === productid1) {
            producttemp = productArray[i];
            break;
        }
    }

    // Check if the cart is empty
    if (localStorage.getItem('manggiohang') === null) {
        var manggiohang = {
            customerId: userLogin.userId, // Set customer ID as needed
            cart: [],
        };

        producttemp.quantity = quantity;
        producttemp.totalprice = quantity * producttemp.price;
        manggiohang.cart.unshift(producttemp);
        localStorage.setItem('manggiohang', JSON.stringify(manggiohang));
    } else {
        // Cart is not empty
        var manggiohang = JSON.parse(localStorage.getItem('manggiohang'));
        var found = false;

        // Check if the product is already in the cart
        for (var i = 0; i < manggiohang.cart.length; i++) {
            if (manggiohang.cart[i].id === producttemp.id) {
                // Product is already in the cart, update the quantity
                manggiohang.cart[i].quantity = parseInt(manggiohang.cart[i].quantity) + parseInt(quantity);
                manggiohang.cart[i].totalprice = parseInt(manggiohang.cart[i].quantity) * parseInt(manggiohang.cart[i].price);
                found = true;
                break;
            }
        }

        // If the product is not in the cart, add it
        if (!found) {
            producttemp.quantity = quantity;
            producttemp.totalprice = quantity * producttemp.price;
            manggiohang.cart.unshift(producttemp);
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('manggiohang', JSON.stringify(manggiohang));
    }

    // Update the cart display
    displayCart();

    // Close the product info modal
    closeProductInfo();
}
function buy(){
	//if(localStorage.getItem('userLogin')===null){
		//alert('Bạn phải đăng nhập để mua sản phẩm','warning');
		//return false;
	//}
	var info = '';
	var totalprice = 0;
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
			info+=cartArray[i].quantity+' x '+cartArray[i].name+'; ';
			totalprice+=cartArray[i].quantity*cartArray[i].price;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
    cart2.push(localStorage.getItem('cart'));
	localStorage.removeItem('cart');
	//showCartTable();
	//showbill();
}
// function quantitydown2(id){
// 	var cartArray = JSON.parse(localStorage.getItem('cart'));
// 	for (var i = 0; i < cartArray.length; i++) {
// 		if(cartArray[i].productId==id){
// 			if(cartArray[i].quantity>1)
// 				cartArray[i].quantity--;
// 		}
// 	}
// 	localStorage.setItem('cart',JSON.stringify(cartArray));
// 	showCartTable();
// }
// function quantityup2(id){
// 	var cartArray = JSON.parse(localStorage.getItem('cart'));
// 	for (var i = 0; i < cartArray.length; i++) {
// 		if(cartArray[i].productId==id){
// 				cartArray[i].quantity++;
// 		}
// 	}
// 	localStorage.setItem('cart',JSON.stringify(cartArray));
// 	showCartTable();
// }
// function showbill(){
// 	if (localStorage.getItem('bill')===null){
// 		document.getElementById('bill').style.display = 'none';
// 	}
// 	else{
// 		var user = JSON.parse(localStorage.getItem('userlogin'))
// 		var billArray = JSON.parse(localStorage.getItem('bill'));
// 		var s='<h2>Đơn hàng đã đặt</h2>';
// 		for (var i = 0; i < billArray.length; i++) {
// 			if(user.username==billArray[i].customer.username){
// 				document.getElementById('bill').style.display = 'block';
// 				s+='<div class="billcontent">'+
// 					'<div>'+billArray[i].info+'</div>'+
// 					'<div>'+currency(billArray[i].totalprice)+'</div>'+
// 					'<div>'+billArray[i].date+'</div>'+
// 					'<div>'+billArray[i].status+'</div>'+
// 				'</div>';
// 			}
// 		}
// 		document.getElementById('bill').innerHTML = s;
// 	}
// }
cart2 =[{
    id:'',
    name:'',
    totalprice:0,
    quantity:'',
}];
/* giỏ hàng
document.addEventListener('DOMContentLoaded', () => {
    initialize();
});

function initialize() {
    let manggiohang = JSON.parse(localStorage.getItem('manggiohang')) || {
        customerId: userId,
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
    productImage.src = product.img;
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

function adjustQuantity(product, amount) {
    console.log("Điều chỉnh số lượng:", product.name, amount);

    // If the product quantity is 1 and an attempt is made to decrease it, set it to 1 and do nothing
    if (product.quantity === 1 && amount === -1) {
        return;
    }

    // Update the quantity directly
    product.quantity = Math.max(1, product.quantity + amount);

    // Update the DOM with the new quantity
    updateProductQuantity(product);
    console.log("Số lượng mới:", product.quantity);

    // Update the total cost directly
    updateTotalCost();

    // Update the cart count
    updateCartCount();

    // Save the cart data after adjusting quantity
    const manggiohang = getCurrentCartData();
    localStorage.setItem('manggiohang', JSON.stringify(manggiohang));
}


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
        customerId: userId,
        cart: currentCartData,
    };
}
console.log(localStorage.getItem('manggiohang'));
*/


