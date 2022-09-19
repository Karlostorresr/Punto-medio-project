///Publicacion///
let postInformation = 
    {   "img":"/Multimedia/Sombrero charro.png",
        "avatar":"/Multimedia/Sombrero charro.png",
        "userFirstName":"Karlos",
        "userLastName":"Torres",
        "date":"02-Sep-2022 09:10",
        "productName":"Sombrero charro",
        "productDescription":"Sombre charro unisex en diferentes tamaños para estas fiestas patrias"
    };

function createPostSection(postID){
    let productImage= document.createElement('img');
    productImage.className='img-fluid  bordeR';
    productImage.src=postInformation["img"];
    productImage.alt=postInformation["productName"];
    let imgContainer=document.getElementById("imageContainer");
    imgContainer.appendChild(productImage);

    let avatarContainer=document.createElement('img');
    avatarContainer.className='smallAvatar';
    avatarContainer.src=postInformation["avatar"];
    let userAvatarContainer=document.getElementById("avatarContainer");
    userAvatarContainer.appendChild(avatarContainer);

    let tagA=document.createElement('a');

    let userNames=document.createElement('h3');
    userNames.className='titleFont';
    userNames.innerText=postInformation["userFirstName"] + " " + postInformation["userLastName"];
    tagA.append(userNames);
    namesContainer=document.getElementById("userNameContainer");
    namesContainer.appendChild(tagA);
    
    let tagP=document.createElement('p');
    tagP.className='card-text';

    let hour=document.createElement('small');
    hour.className='text-muted';
    hour.innerText=postInformation["date"];
    tagP.appendChild(hour);
    namesContainer.appendChild(tagP);


    let product =document.createElement('h5');
    product.className='card-title titleFont';
    product.innerText=postInformation["productName"];
    productContainer=document.getElementById("productNameContainer");
    productContainer.appendChild(product);

   let productDescription =document.createElement('p');
    productDescription.className='card-text structureText';
    productDescription.innerText=postInformation["productDescription"];
    descriptionContainer=document.getElementById("productTextContainer");
    descriptionContainer.appendChild(productDescription);
}

createPostSection(postInformation);


///Comentarios///
let dummyCommentsArray = [
    {
        "date": "2022-09-04 14:35:00",
        "userName": "Lucho Sama Montes",
        "commentText": "Muffin sale a pasear con Brownie todos los dias"
    },
    {
        "date": "2022-09-04 15:35:00",
        "userName": "Guillermo Garibay",
        "commentText": "Generetion me esta quitando las ganas de vivir "
    }
];


function createCommentDiv(element) {
    let commentDivContainer = document.createElement('div');
    commentDivContainer.className='comment';

    let userName=document.createElement('div');
    userName.className='userNameComment titleFont';
    userName.innerText = element["userName"];

    let commentDate=document.createElement('div');
    commentDate.className='date structureText';
    commentDate.innerText=element["date"];

    let commentText=document.createElement('div');
    commentText.className='commentText structureText';
    commentText.innerText=element["commentText"];

    commentDivContainer.appendChild(userName);
    commentDivContainer.appendChild(commentDate);
    commentDivContainer.appendChild(commentText);

    return commentDivContainer;
}

function readDB(commentArray){
    commentArray.forEach(element => {
        let result = createCommentDiv(element);
        document.getElementById("commentsContainer").appendChild(result);
    });
}

readDB(dummyCommentsArray);






















