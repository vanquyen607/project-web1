document.addEventListener('DOMContentLoaded', function () {
    var fileInput = document.getElementById('file-input');
    var uploadedImage = document.getElementById('uploaded-image');
    fileInput.addEventListener('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();

            reader.addEventListener('load', function (e) {
                uploadedImage.src = e.target.result;
            });
            reader.readAsDataURL(file);
        } else {
            // Clear the uploaded image when no file is selected
            uploadedImage.src = "";
        }
    });
});
function deleteImage() {
    var fileInput = document.getElementById('file-input');
    var uploadedImage = document.getElementById('uploaded-image');

    // Clear the uploaded image and reset the file input value
    uploadedImage.src = '';
    fileInput.value = '';
}

