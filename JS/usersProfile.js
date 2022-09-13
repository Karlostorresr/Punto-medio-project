let productPosted = [
    {
        "id": 6545454,
        "image": "/Multimedia/Sombrero charro.png",
        "productName": "Sombrero charro",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem culpa ex!"
    },
    {
        "id": 9878454,
        "image": "/Multimedia/imagenprueba1.png",
        "productName": "Lentes para perro ",
        "description": "Lentes para perro playero costo:50 pelucholares"
    },
    {
        "id": 7575754,
        "image": "/Multimedia/IMAGENPRUEB2.png",
        "productName": "Gorra con grabado de leon",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tenetur rem culpa ex!"
    }
];

function createSoloDiv(element) {
    let soloProductContainer = document.createElement('div');
    soloProductContainer.className = 'soloProduct';

    let imageNreactions = document.createElement('div');
    imageNreactions.className = 'imageNreactions border';

    let imageContainer = document.createElement('div');
    imageContainer.className = 'imageContainer';

    let reactionsContainer = document.createElement('div');
    reactionsContainer.className = 'reactionsContainer';

    let reactionButton1 =document.createElement('div');
    reactionButton1.className = 'reactionButton';
    reactionButton1.id='likeButton';

    let reactionButton2 =document.createElement('div');
    reactionButton2.className = 'reactionButton';
    reactionButton2.id='disLikeButton';

    let reactionButton3 =document.createElement('div');
    reactionButton3.className = 'reactionButton';
    reactionButton3.id='commentButton';

    let simplebutton1=document.createElement('button');

    let simplebutton2=document.createElement('button');

    let simplebutton3=document.createElement('button');

    let iconLike=document.createElement('i');
    iconLike.className= 'fa-regular fa-heart fa-lg';
    iconLike.id='like'

    let iconDislike=document.createElement('i');
    iconDislike.className= 'fa-regular fa-thumbs-down fa-lg';
    iconDislike.id='dislike'
    
    let iconcomment=document.createElement('i');
    iconcomment.className= 'fa-regular fa-comment fa-lg';
    iconcomment.id='comment'

    let productDescription = document.createElement('div');
    productDescription.className = 'productDescription border';

    let productText = document.createElement('div');
    productText.className = 'fontText';

    let productName = document.createElement('span');
    productName.className = 'productName';

    let anchortag=document.createElement('a');
    anchortag.href='http://127.0.0.1:5500/HTML/individualPostPage.html?id='+element["id"];

    let bTag = document.createElement('b');

    let uTag = document.createElement('u');
    uTag.innerText = element["productName"];

    let image = document.createElement('img');
    image.className = 'productImage border';
    image.src = element["image"];

    let description = document.createElement('span');
    description.className = 'description';
    description.innerText = element["description"];

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
        console.log(id+ "fue likedo ");
    });

    simplebutton2.addEventListener("click", (element) => {
        console.log(id+ "fue dislikedo ");
    });

   

    return soloProductContainer;
}

function readDB(commentArray) {
    commentArray.forEach(element => {
        let result = createSoloDiv(element);
        document.getElementById("productsPosted").appendChild(result);
    });
}

readDB(productPosted);


////////////////

