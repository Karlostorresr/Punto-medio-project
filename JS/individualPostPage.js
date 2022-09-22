let URL_individualPost ='http://localhost:8080/PuntoMedio/Postnum/1'

fetch(URL_individualPost,{
    method: 'get'
}) 

    .then(function(response1){
    response1.json().then(function(responseJson1){

    console.log(responseJson1);
        
    
    let productImage= document.createElement('img');
    productImage.className='img-fluid  bordeR';
    productImage.src=responseJson1["imagenURL"];
    productImage.alt=responseJson1["productName"];
    let imgContainer=document.getElementById("imageContainer");
    imgContainer.appendChild(productImage);

    let avatarContainer=document.createElement('img');
    avatarContainer.className='smallAvatar';
    avatarContainer.src=responseJson1["avatar"];/////
    let userAvatarContainer=document.getElementById("avatarContainer");
    userAvatarContainer.appendChild(avatarContainer);

    let tagA=document.createElement('a');

    let userNames=document.createElement('h3');
    userNames.className='titleFont';
    userNames.innerText=responseJson1["userName"] + " " +responseJson1["userName"];
    tagA.append(userNames);
    namesContainer=document.getElementById("userNameContainer");
    namesContainer.appendChild(tagA);
    
    let tagP=document.createElement('p');
    tagP.className='card-text';

    let hour=document.createElement('small');
    hour.className='text-muted';
    hour.innerText=responseJson1["date"]//;
    tagP.appendChild(hour);
    namesContainer.appendChild(tagP);


    let product =document.createElement('h5');
    product.className='card-title titleFont';
    product.innerText=responseJson1["productName"];
    productContainer=document.getElementById("productNameContainer");
    productContainer.appendChild(product);

   let productDescription =document.createElement('p');
    productDescription.className='card-text structureText';
    productDescription.innerText=responseJson1["productDescription"];
    descriptionContainer=document.getElementById("productTextContainer");
    descriptionContainer.appendChild(productDescription);
    

    })
})




let URL_Commentarios=`http://localhost:8080/post/comments/Postnum/1`
fetch (URL_Commentarios,{
    method:'get'
}) .then (function (response){
    response.json().then(function(ResponseJson){

        console.log(ResponseJson);
        
            ResponseJson.forEach(element => {
                let result = createCommentDiv(element);
                document.getElementById("commentsContainer").appendChild(result);
            });
        
        
    })
})


function createCommentDiv(element) {
    let commentDivContainer = document.createElement('div');
    commentDivContainer.className='comment';

    let userName=document.createElement('div');
    userName.className='userNameComment titleFont';
    userName.innerText = element["usuario"];

    let commentDate=document.createElement('div');
    commentDate.className='date structureText';
    commentDate.innerText=element["fecha"];

    let commentText=document.createElement('div');
    commentText.className='commentText structureText';
    commentText.innerText=element["textoComentario"];

    commentDivContainer.appendChild(userName);
    commentDivContainer.appendChild(commentDate);
    commentDivContainer.appendChild(commentText);

    return commentDivContainer;
}


























