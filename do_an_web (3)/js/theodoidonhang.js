
function displayOrder(temp){
    var OrderArr = JSON.parse(localStorage.getItem('bill'));
    var CartArr = JSON.parse(localStorage.getItem('subarr'));
    var UserArr = JSON.parse(localStorage.getItem('usersDataArray'));
    var s = `<div id="list_order">`;
    var t="";
    for(i=0; i<OrderArr.length;i++){
        if(OrderArr[i].userId == temp){
            t += `<div class="form_don">
            <div class="ma_don">${OrderArr[i].id}</div>
            <div class="sp">
                <div>${OrderArr[i].info}</div>`
            // for(j=0; j<CartArr.length;j++){
            //     if(CartArr[j].userId == OrderArr[i].userId){
            //         for(k=0;k<CartArr[j].cart.length;k++){
            //             t += `<div><img src="${CartArr[j].cart[k].img}" width="100px" height="100px" />
            //             ${CartArr[j].cart[k].name} x${CartArr[j].cart[k].quantity} </div>`;
            //         }
                    
            //     }
            // }
            t += `</div>
            <div class="don_gia">${OrderArr[i].totalprice}</div>
            <div class="ngay">${OrderArr[i].date}</div>
            <div class="tinh_trang">${OrderArr[i].status}</div>
            </div>`
        }
        
    }
    s += t+`</div>`;
    document.getElementById('list_order').innerHTML = s;
}