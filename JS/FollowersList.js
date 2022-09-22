/*let followersList = [
    {   "profileURL":" ",
        "avatar": "/Multimedia/Fernanda.png",
        "userName": "Fernanda Martinez"   
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/Armando.png",
        "userName": "Armando"
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/Mariana.jpeg",
        "userName": "Marianonga"
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/Sombrero charro.png",
        "userName": "Karlos Torres"
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/Fer O..png",
        "userName": "Fernando Orozco"
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/Betsy.png",
        "userName": "Betsy Quintero"
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/MuffinP.png",
        "userName": "Muffin Programadora"
    },
    {   "profileURL":" ",
        "avatar": "/Multimedia/Nena.png",
        "userName": "Alicia Castillo"
    }
];*/




function createListElement(element) {
    let button=document.createElement('button');
    button.type="button";
    button.className='list-group-item list-group-item-action';
    
    let ownerContainer =document.createElement('div');
    ownerContainer.className='col-md-12 OwnerPost';
    
    let avatarContainer= document.createElement('div');
    avatarContainer.className='avatarContainer';

    let avatarImg=document.createElement('img');
    avatarImg.className='smallAvatar';
    avatarImg.src=element["avatar"];

    let userNameContainer=document.createElement('div');
    userNameContainer.className='userName';
   
    let tagAusuario=document.createElement('a');
    tagAusuario.className='anchor';
    tagAusuario.href=element["profileURL"];

    let userName=document.createElement('h3');
    userName.className='anchor';
    userName.innerText=element["followerName"];


    tagAusuario.appendChild(userName);
    userNameContainer.appendChild(tagAusuario);
    avatarContainer.appendChild(avatarImg);
    ownerContainer.appendChild(avatarContainer);
    ownerContainer.appendChild(userNameContainer);
    button.appendChild(ownerContainer);

    return button;
}

function readDB(commentArray){
    let URL_followers = `http://localhost:8080/PuntoMedio/UsuarioFollowers/1`

    fetch(URL_followers,{
        method: 'get'
    }) 
    
    .then(function (response){
        response.json().then(function (responseJson){
            console.log(responseJson);
           responseJson.forEach(element => {
            let result = createListElement(element);
            document.getElementById("followersContainer").appendChild(result);
            }); 
        })
    })
    
}

readDB(1);


/*
function createFollowerDiv() {

    let innerHtml = `
        <button type="button" class="list-group-item list-group-item-action">
        <div class="col-md-12">
            <div class="OwnerPost">
                <div class="avatarContainer" id="avatarContainer">
                    ${avatarcontainer} 
                </div>
                <div class="userName" id="userNameContainer">
                    ${userNameC["avater"]}
                </div>
            </div>
        </div>
        </button>
    `;
}
*/