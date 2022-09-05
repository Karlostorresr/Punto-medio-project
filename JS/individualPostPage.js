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






















