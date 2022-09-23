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

//metodo post

// FETCH PARA HACER EL METODO POST

// Este es nuestro cuerpo del POST


/*
const data =     
    {nombre: "Sopa Maruchan de Res",
    descripcion: "Sopa Maruchan sabor Res de 150 grs",
    precio: 17.0,
    url_Imagen: "sopaMaruchanRes.jpg"
};

*/
const URL_MAIN = 'localhost:8080/PuntoMedio/';

fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
  method: 'POST', // or 'PUT' 
  headers: { // se agrega el header
    'Content-Type': 'application/json', //tipo de contenido
  },
  body: JSON.stringify(data), //se agrega el cuerpo del POST
})
  .then(response => response.json()) //se obtiene la respuesta del servidor
  .then(data => { //se obtiene el json
    console.log('Success:', data); //se imprime el json
  })
  .catch((error) => { //si hay un error
    console.error('Error:', error); //se imprime el error
  });
