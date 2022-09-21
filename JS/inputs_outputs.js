//* Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
    btnVote: document.getElementsByClassName("heartInput")
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
    if (postComment()) {
        commentInputs.comment.value = "";
    }
}

const postComment = () => {
fetch(URL_Comments, { 
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data), 
  })
  .then(response => response.json()) 
  .then(data => { 
    console.log('Success:', data); 
  })
  .catch((error) => { 
    console.error('Error:', error); 
  });
}

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
   let commentID = document.querySelector("data_id");
   console.log(commentID)
    let score = document.getElementsByClassName("upvoteNumber_" + commentID)[0];
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
}

// Event listeners

//* Call function setEventListeners
setEventListeners();

