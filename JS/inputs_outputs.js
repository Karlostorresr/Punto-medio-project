//* Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
    btnVote: Array.from(document.getElementsByClassName("heartInput")),
    voteNumber: Array.from(document.getElementsByClassName("upvoteNumber_")),
};

//  Submit button and fields validation
let canSubmit = false;

//* Submit comment after validating
function commentSubmit() {
    if (canSubmit) {
        let comments = {
            comment: commentInputs.comment.value.trim()
        };
        disableSubmit();
    }
    commentInputs.comment.value = "";
}

const btn = commentInputs.submit;

//* Check text validation 
function enableButton() {
    let comment = commentInputs.comment.value.trim();
    if (comment.length > 9 & comment.length < 280) { //If the comment length is longer than 14 characters 
        commentInputs.submit.classList.add("commentInputEnabled");//Creates the class commentInputEnabled
        commentInputs.submit.classList.add("commentInputEnabled:hover")
        commentInputs.submit.disabled = false;//Then enables the submit button
        canSubmit = true;
    } else {
        disableSubmit();
    }
}

//* Function to disable submit button
function disableSubmit() {
    commentInputs.submit.classList.remove("commentInputEnabled");//Remove the class commentInputEnabled
    commentInputs.submit.disabled = true;//Then enables the submit button
    canSubmit = false;
}
//  Submit button and fields validation

// Increase vote number
function increaseVote(el, vote) {
    let commentID = el.getAttribute("data-id")
    let score = Array.from(document.getElementsByClassName("upvoteNumber_" + commentID))[0].innerText;
    score = parseInt(score);
    if (vote) {
        score = score + 1;
    }

    if (score >= 0) {
        document.getElementsByClassName("upvoteNumber_" + commentID)[0].innerText = score;
    }
}

// Event listeners
//* Event listener for 
function setEventListeners() {
    commentInputs.submit.addEventListener("click", commentSubmit);//Fires the function commentSubmit on click
    commentInputs.comment.addEventListener("keyup", enableButton);//Fires the event enableButton when the key is relesed
    for (let i = 0; i < commentInputs.btnVote.length; i++) {
        commentInputs.btnVote[i].addEventListener("click", function () { increaseVote(this, true) });
    }
}

// Event listeners

//* Call function setEventListeners
setEventListeners();

