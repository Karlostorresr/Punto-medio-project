/////////////////
/////Usuario/////
/////////////////
/*let userInfo = {
        "idUsuario":5128,
        "nombreUsuario":"Lheilani",
        "avatar":"/Multimedia/lheicas.jpeg",
        "apellidoUsuario":"Castillo",
        "fotoMarca":"/Multimedia/portadaMagnolia.png",
        "descripcionMarca":"Magnolia: Es una boutique local, la cual busca poner al alcance de todas las personas vestir siempre comodas y a la moda. Ofrecemos muchos accesorios  y articulos que se adapatan a todos los estilos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem "
    }
;*/

let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN = 'http://localhost:8080/PuntoMedio/perfilUsuario/1'; //URL a donde se hace la petición

function readUserDB() {

    fetch(URL_MAIN, {
        method: 'get'
    })
        .then(function (response) {
            response.json().then(function (responseJson) {

                console.log(responseJson);

                let userName = document.createElement('span');
                userName.className = 'userName';
                userName.innerText = responseJson["nombreUsuario"] + " " + responseJson["apellidoUsuario"];
                console.log(userName);
                entrepreneurName = document.getElementById("userNameContainer");
                entrepreneurName.appendChild(userName);
                let userPhoto = document.createElement('img');
                userPhoto.className = 'userImage border';
                userPhoto.src = responseJson["avatar"];
                entrepreneurPhoto = document.getElementById("userImageContainer");
                entrepreneurPhoto.appendChild(userPhoto);
                let brandPhoto = document.createElement('img');
                brandPhoto.className = 'brandImagePicture';
                brandPhoto.src = responseJson["fotoMarca"];
                brandLogo = document.getElementById("brandPhotoContainer");
                brandLogo.appendChild(brandPhoto);
                let textDescription = document.createElement('div');
                textDescription.className = "brandTextDescription fontText border";
                textDescription.innerText = responseJson["descripcionMarca"];
                brandText = document.getElementById("brandDescription");
                brandText.appendChild(textDescription);
                return brandPhoto;
            })
        })


}

readUserDB();



/////////////////
//Publicaciones//
/////////////////

/*
let productPosted = [
    {
        "id": 6545454,
        "image": "/Multimedia/Iprueba2.png",
        "productName": "Sombrero charro",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem culpa ex!"
    },
    {
        "id": 9878454,
        "image": "/Multimedia/Iprueba4.png",
        "productName": "Lentes para perro ",
        "description": "Lentes para perro playero costo:50 pelucholares"
    },
    {
        "id": 7575754,
        "image": "/Multimedia/Iprueba3.png",
        "productName": "Gorra con grabado de leon",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem culpa ex!"
    }
];*/



function createSoloDiv(element) {
    let soloProductContainer = document.createElement('div');
    soloProductContainer.className = 'soloProduct';

    let imageNreactions = document.createElement('div');
    imageNreactions.className = 'imageNreactions border';

    let imageContainer = document.createElement('div');
    imageContainer.className = 'imageContainer';

    let reactionsContainer = document.createElement('div');
    reactionsContainer.className = 'reactionsContainer';

    let reactionButton1 = document.createElement('div');
    reactionButton1.className = 'reactionButton';
    reactionButton1.id = 'likeButton';

    let reactionButton2 = document.createElement('div');
    reactionButton2.className = 'reactionButton';
    reactionButton2.id = 'disLikeButton';

    let reactionButton3 = document.createElement('div');
    reactionButton3.className = 'reactionButton';
    reactionButton3.id = 'commentButton';

    let simplebutton1 = document.createElement('button');

    let simplebutton2 = document.createElement('button');

    let simplebutton3 = document.createElement('button');

    let iconLike = document.createElement('i');
    iconLike.className = 'fa-regular fa-heart fa-lg';
    iconLike.id = 'like'

    let iconDislike = document.createElement('i');
    iconDislike.className = 'fa-regular fa-thumbs-down fa-lg';
    iconDislike.id = 'dislike'

    let iconcomment = document.createElement('i');
    iconcomment.className = 'fa-regular fa-comment fa-lg';
    iconcomment.id = 'comment'

    let productDescription = document.createElement('div');
    productDescription.className = 'productDescription border';

    let productText = document.createElement('div');
    productText.className = 'fontText';

    let productName = document.createElement('span');
    productName.className = 'productName';

    let anchortag = document.createElement('a');
    anchortag.href = 'http://127.0.0.1:5500/HTML/individualPostPage.html?id=' + element["postId"];

    let bTag = document.createElement('b');

    let uTag = document.createElement('u');
    uTag.innerText = element["productName"];

    let image = document.createElement('img');
    image.className = 'productImage border';
    image.src = element["imagenURL"];

    let description = document.createElement('span');
    description.className = 'description';
    description.innerText = element["productDescription"];

    soloProductContainer.appendChild(imageNreactions);
    soloProductContainer.appendChild(productDescription);
    imageNreactions.appendChild(imageContainer);
    imageNreactions.appendChild(reactionsContainer);
    reactionsContainer.appendChild(reactionButton1);
    reactionButton1.appendChild(simplebutton1);
    simplebutton1.appendChild(iconLike)
    reactionsContainer.appendChild(reactionButton2);
    reactionButton2.appendChild(simplebutton2);
    simplebutton2.appendChild(iconDislike)
    reactionsContainer.appendChild(reactionButton3);
    reactionButton3.appendChild(simplebutton3);
    simplebutton3.appendChild(iconcomment);
    simplebutton3.appendChild(anchortag);
    imageContainer.appendChild(image);
    image.appendChild(anchortag);
    productDescription.appendChild(productName);
    productDescription.appendChild(description);
    productName.appendChild(bTag);
    productName.appendChild(uTag);

    let id = element['id'];
    simplebutton1.addEventListener("click", (element) => {
        console.log(id + "fue likedo ");
    });

    simplebutton2.addEventListener("click", (element) => {
        console.log(id + "fue dislikedo ");
    });



    return soloProductContainer;
}

function readDB(userId) {

    let URLposts = `http://localhost:8080/PuntoMedio/PublicacionByUser/${userId}`

    fetch(URLposts, {
        method: 'get'
    })
        .then(function (response) {
            response.json().then(function (responseJson) {

                responseJson.forEach(element => {
                    let result = createSoloDiv(element);
                    document.getElementById("productsPosted").appendChild(result);
                });


            })
        })




}

readDB(1);


/////////////////
/////Stars///////
/////////////////

let starSection = ['Star-1', 'Star-2', 'Star-3', 'Star-4', 'Star-5'];

function readStar(array) {
    array.forEach(element => {
        let star = document.getElementById(element);
        let starNumber = element.split("-");
        star.addEventListener("click", (details) => {
            console.log("La estrella " + starNumber[1] + " fue clickeada");
            changeStarColor(starNumber[1]);
        });
    })
}

function changeStarColor(id) {
    let i = 1;
    for (i; i <= id; i++) {
        let StarIconElement = document.getElementById("Star-" + i);
        StarIconElement.className = 'starSelected fa-regular fa-star';
    }

    for (i; i <= 5; i++) {
        let StarIconElement = document.getElementById("Star-" + i);
        StarIconElement.className = 'fa-regular fa-star';
    }
}
readStar(starSection);


