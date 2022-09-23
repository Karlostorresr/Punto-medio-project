//FETCH PARA METODO GET

let comments;

const URL_Comments = 'http://localhost:8080/puntomedio/tipsventa/';
function addItems(main_comments) {


  fetch(URL_Comments, {
    method: 'get'
  }).then(function (response) {
    response.json().then(function (json) {
      console.log(json);
      console.log(json.length);
      comments = json;
      Array.from(json).forEach((c, index) => {
        main_comments.innerHTML += `
        <article class="main">
        <div class="row d-flex justify-content-center" id="tipsComment_${c.idComentario}">
          <div class="commentHead">
            <a target="_blank" href="/HTML/usersProfile.html">
              <img class="img-fluid" alt="Profile Picture" src="${c.avatar}">
            </a>
            <div class="card mb-3 displayedComment">
              <div class="row g-0">
                <div class="displayedCommentPic col-md-4">
                  <h5 class="card-title">${c.first_name} ${c.last_name}</h5>
                </div>
                <div class="displayedCommentText col-md-8">
                  <div class="card-body">
                    <p class="card-text">${c.textoComentario}</p>
                  </div>
                </div>
              </div>
              <div class="vote">
                <button class="heartInput" onclick="increaseVote()">
                  <i class="far fa-heart fa-lg" aria-hidden="true">
                  </i>
                </button>
                <span id="upvoteNumber_${c.idComentario}">0</span>
              </div>
            </div>
          </div>
        </div>
      </article>
                `;
      });
    });
  }).catch(function (err) {
    console.log(err);
  });
  console.log(document.getElementById("main_comments"));

}// addItems

window.addEventListener("load", function () {
  let main = document.getElementById("main_comments");
  addItems(main);
});

const data = 'http://localhost:8080/puntomedio/tipsventa/';

function postComment() {
  fetch(URL_Comments, { //URL del servicio a donde se hara el POST
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
}