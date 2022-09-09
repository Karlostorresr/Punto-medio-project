const postImages = document.querySelectorAll(".post-image");

postImages.forEach((postImage) => {
  const label = postImage.querySelector('.img-input-label');
  const imgInput = postImage.querySelector('.img-input');
  const imgPreview = postImage.querySelector('.img-preview');
  const imgClear = postImage.querySelector('.img-clear');

  imgInput.onchange = () => {
    const [file] = imgInput.files;

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      label.textContent = "";
      imgClear.style.display = "block";
      imgPreview.style.backgroundImage = `url("${reader.result}")`;
    }

    reader.readAsDataURL(file);
  };

  imgClear.onclick = () => {
    imgInput.value = null;
    imgClear.style.display = 'none';
    imgPreview.style.backgroundImage = 'none';
    label.textContent = '+';
  }
});