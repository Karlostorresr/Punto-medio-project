let listFollowers = [
    {   "avatar": "image",
        "userName": "Lucho Sama Montes"   
    },
    {   
        "avatar": "image",
        "userName": "Lucho Sama Montes"
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
