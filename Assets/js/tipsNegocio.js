document.getElementById("pageTitle").style.letterSpacing = ".3rem";
document.getElementById("pageTitle").style.fontWeight = "bold";
document.getElementById("commentBodyTitle").style.fontWeight = "bold";

// Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
};

let canSubmit = false;

function commentSubmit() {
    if(canSubmit) {
        let comments = {
            comment: commentInputs.comment.value.trim(),
        };
        console.log(comments);
        diableSubmit();
    }
}

//Check text validation 
function enableButton() {
    let comment = commentInputs.comment.value.trim();
    if(comment.length > 4){ //If the comment length is longer than 4 characters 
        commentInputs.submit.classList.add("commentInputEnabled");//Creates the class commentInputEnabled
        commentInputs.submit.disabled = false;//Then enables the submit button
        canSubmit = true;
    } else{
        diableSubmit();
    }
}

function diableSubmit() {
    commentInputs.submit.classList.remove("commentInputEnabled");//Remove the class commentInputEnabled
        commentInputs.submit.disabled = true;//Then enables the submit button
        canSubmit = false;
}

// Event listener for 
function setEventListeners() {
    commentInputs.submit.addEventListener("click", commentSubmit);
    commentInputs.comment.addEventListener("keyup", enableButton);//Fires the event enableButton when the key is relesed
}

// Call function setEventListeners
setEventListeners();

// var post= document.getElementById("postComment");
// post.addEventListener("click", function(){
//     var commentBoxValue= document.getElementById("addANote").value;
 
//     var li = document.createElement("div");
//     var br = document.createElement("br");
//     var text = document.createTextNode(commentBoxValue);
//     li.appendChild(text);
//     document.getElementById("unordered").appendChild(br);
//     document.getElementById("unordered").appendChild(li);
 
// });
