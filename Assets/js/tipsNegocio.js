document.getElementById("pageTitle").style.letterSpacing = ".3rem";
document.getElementById("pageTitle").style.fontWeight = "bold";
document.getElementById("commentBodyTitle").style.fontWeight = "bold";

// Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
    upvote: document.getElementsByClassName("fa-heart")
};

let canSubmit = false;

//Submit comment after validating
function commentSubmit() {
    if (canSubmit) {
        let comments = {
            comment: commentInputs.comment.value.trim()
        };
        console.log(comments);
        disableSubmit();
    }
}

//Check text validation 
function enableButton() {
    let comment = commentInputs.comment.value.trim();
    if (comment.length > 4) { //If the comment length is longer than 4 characters 
        commentInputs.submit.classList.add("commentInputEnabled");//Creates the class commentInputEnabled
        commentInputs.submit.classList.add("commentInputEnabled:hover")
        commentInputs.submit.disabled = false;//Then enables the submit button
        canSubmit = true;
    } else {
        disableSubmit();
    }
}

//Function to disable submit button
function disableSubmit() {
    commentInputs.submit.classList.remove("commentInputEnabled");//Remove the class commentInputEnabled
    commentInputs.submit.disabled = true;//Then enables the submit button
    canSubmit = false;
}

// Increase vote number
function increaseVote(el, vote) {
    let commentID = el.getAttribute("data-id")
    let score = document.getElementsByClassName("upvoteNumber_" + commentID)[0].innerText;
    score = parseInt(score);
    if (vote) {
        score = score + 1;
    }

    if (score >= 0) {
        document.getElementsByClassName("upvoteNumber_" + commentID)[0].innerText = score;
    }
}

//Fill heart input

// function toggleHeart() {
//     if (commentInputs.upvote.classList.contains('far')) {
//         commentInputs.upvote.classList.remove('far');
//         commentInputs.upvote.classList.add('fas');
//     }
// }


// Event listener for 
function setEventListeners() {
    // commentInputs.upvote.addEventListener("click", toggleHeart());
    commentInputs.submit.addEventListener("click", commentSubmit);//Fires the function commentSubmit on click
    commentInputs.comment.addEventListener("keyup", enableButton);//Fires the event enableButton when the key is relesed
    for (let i = 0; i < commentInputs.upvote.length; i++) {
        commentInputs.upvote[i].addEventListener("click", function () {increaseVote(this, true) });
    }
}

// Call function setEventListeners
setEventListeners();


