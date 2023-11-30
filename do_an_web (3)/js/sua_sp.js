document.addEventListener('DOMContentLoaded', function () {
    var fileInput = document.getElementById('file-change');
    var changeImage = document.getElementById('change-image');
    // Add a change event listener to the file input
    fileInput.addEventListener('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();

            reader.addEventListener('load', function (e) {
                changeImage.src = e.target.result;
            });

            reader.readAsDataURL(file);
        } else {
            changeImage.src = "";
        }
    });
    // Check if deleteImageButton exists before adding an event listener
});
function deleteImage_Sua() {
    var fileInput = document.getElementById('file-change');
    var uploadedImage = document.getElementById('change-image');
    uploadedImage.src = '';
    fileInput.value = '';
}
