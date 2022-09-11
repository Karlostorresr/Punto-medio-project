document.getElementById("pageTitle").style.letterSpacing = ".3rem";
document.getElementById("pageTitle").style.fontWeight = "bold";
document.getElementById("commentBodyTitle").style.fontWeight = "bold";

const initApp = async () => { //Start the app
    // get json data from db
    const contacts = await getDataFromDB();
    // render data to page
    renderContacts(contacts);
    // add listeners
    listenForLikes();
  };

  const getDataFromDB = async () => { //fetch data from the DB
    const dataBase = await fetch(
      ""// API de nuestra DB
    );
    const jsonData = await dataBase.json();
    return jsonData.data;
  };

  const renderContacts = (contacts) => { 
    const main = document.querySelector("main");
    const cardsArray = [];
  
    contacts.forEach((contact) => {
      const elemObj = createCardElements();
      const card = createPersonCard(elemObj, contact);
      cardsArray.push(card);
    });
  
    cardsArray.forEach((card) => {
      main.appendChild(card);
    });
  };

  const createCardElements = () => {
    const article = document.createElement("article");
    const tipsComment = document.createElement("div");
    const commentHead = document.createElement("div");
    const img = document.createElement("img");
    const card_mb = document.createElement("div");
    const row_g_0 = document.createElement("div");
    const col_md_4 = document.createElement("div");
    const name = document.createElement("h5");
    const displayedCommentText = document.createElement("div");
    const cardBody = document.createElement("div");
    const card_text = document.createElement("p");
    const vote = document.createElement("div");
    const heartInput = document.createElement("button");
    const icon = document.createElement("i");
    const upvoteNumber = document.createElement("span")
    const commentDate = document.createElement("span")
    return {article ,tipsComment, commentHead, img, card_mb, row_g_0, col_md_4, name, displayedCommentText, cardBody, card_text, vote, heartInput, icon, upvoteNumber, commentDate};
  };
  
const createPersonCard = (elemObj, person) => {
    const {article, tipsComment, commentHead, img, card_mb, row_g_0, col_md_4, name, displayedCommentText, cardBody, card_text, vote, heartInput, icon, upvoteNumber, commentDate } = elemObj;
    
    tipsComment.className = "row", "d-flex", "justify-content-center";
    commentHead.className = "commentHead";
    img.className = "img-fluid";
    card_mb.className = "card", "mb-3", "displayedComment";
    row_g_0.className = "row", "g-0";
    col_md_4.className = "displayedCommentPic", "col-md-4";
    name.className = "card-title";
    displayedCommentText.className = "displayedCommentText", "col-md-8";
    cardBody.className = "card-body";
    card_text.className = "card-text";
    vote.className = "vote";
    heartInput.className = "heartInput";
    icon.className = "far", "fa-heart", "fa-lg";
    upvoteNumber.className = "upvoteNumber_";
    commentDate.className = "commentDate";
   
    details.appendChild(tipsComment);
    details.appendChild(commentHead);
    article.appendChild(img);
    details.appendChild(card_mb);
    details.appendChild(row_g_0);
    details.appendChild(col_md_4);
    details.appendChild(name);
    details.appendChild(displayedCommentText);
    details.appendChild(cardBody);
    details.appendChild(card_text);
    article.appendChild(vote);
    article.appendChild(heartInput);
    details.appendChild(icon);
    details.appendChild(upvoteNumber);
    details.appendChild(commentDate);
    return article;
  };

//* Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
    upvote: document.querySelectorAll(".heartInput")
};

//  Submit button and fields validation
let canSubmit = false;

//* Submit comment after validating
function commentSubmit() {
    if (canSubmit) {
        let comments = {
            comment: commentInputs.comment.value.trim()
        }; 
        console.log();
        disableSubmit();
    }
}

//* Check text validation 
function enableButton() {
    let comment = commentInputs.comment.value.trim();
    if (comment.length > 50) { //If the comment length is longer than 4 characters 
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

// Event listeners
//* Event listener for 
function setEventListeners() {
    commentInputs.submit.addEventListener("click", commentSubmit);//Fires the function commentSubmit on click
    commentInputs.comment.addEventListener("keyup", enableButton);//Fires the event enableButton when the key is relesed
    for (let i = 0; i < commentInputs.upvote.length; i++) {
        commentInputs.upvote[i].addEventListener("click", function () {increaseVote(this, true)});
    }
    }
// Event listeners

// Like input functions
//* Increase vote number
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

//* Call function setEventListeners
setEventListeners();
