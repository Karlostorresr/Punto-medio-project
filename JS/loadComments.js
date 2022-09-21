//FETCH PARA METODO GET

let comments;

const URL_Comments = '../JS/fakerApi.json'; //URL a donde se hace la petición
const data = URL_Comments;
function addItems(main_comments) { //donde se va a agregar los productos



  fetch(URL_Comments, {
    method: 'get' //tipo de método
  }).then(function (response) {//response es la respuesta del servidor
    response.json().then(function (json) { //json es el objeto que se obtiene del servicio
      console.log(json); //imprime el json
      console.log(json.length); //imprime el tamaño del json
      productos = json; //se guarda el json en la variable productos
      Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
        main_comments.innerHTML += `
        <article class="main">
        <div class="row d-flex justify-content-center" id="tipsComment_">
          <div class="commentHead">
            <a target="_blank" href="#">
              <img class="img-fluid" alt="Profile Picture" src="${p.avatar}">
            </a>
            <div class="card mb-3 displayedComment">
              <div class="row g-0">
                <div class="displayedCommentPic col-md-4">
                  <h5 class="card-title">${p.first_name} ${p.last_name}</h5>
                </div>
                <div class="displayedCommentText col-md-8">
                  <div class="card-body">
                    <p class="card-text">${p.comment}</p>
                  </div>
                </div>
              </div>
              <div class="vote">
                <button class="heartInput" data-id= "${p.uuid}">
                  <i class="far fa-heart fa-lg" aria-hidden="true">
                  </i>
                </button>
                <span class="upvoteNumber_">${p.counter}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
                `;
      }); // foreach para agregar los productos al div del HTML
    });//then
  }).catch(function (err) { //si hay un error
    console.log(err); //imprime el error
  });
  console.log(document.getElementById("main_comments")); //imprime el div donde se va a agregar los productos

}// addItems

window.addEventListener("load", function () { //cuando se cargue la página
  let main = document.getElementById("main_comments"); //div donde se va a agregar los productos
  addItems(main); //se llama a la función addItems

});


