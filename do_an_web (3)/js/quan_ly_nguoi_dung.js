function editCustomer() {
    // Xử lý sự kiện khi nhấp vào nút "Sửa"
    alert("Chức năng sửa đang được phát triển...");
}

function deleteCustomer() {
    // Xử lý sự kiện khi nhấp vào nút "Xóa"
    alert("Chức năng xóa đang được phát triển...");
}
function toggleSelectAllCustomers() {
    // Lấy danh sách tất cả các checkbox
    var checkboxes = document.querySelectorAll('.customer-info input[type="checkbox"]');
    
    // Lấy giá trị của checkbox "Chọn tất cả"
    var selectAllCheckbox = document.getElementById('selectAllCustomers');
    
    // Duyệt qua danh sách checkbox và thiết lập giá trị của chúng bằng giá trị của checkbox "Chọn tất cả"
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
}