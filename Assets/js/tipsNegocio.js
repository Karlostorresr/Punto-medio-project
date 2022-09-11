document.getElementById("pageTitle").style.letterSpacing = ".3rem";
document.getElementById("pageTitle").style.fontWeight = "bold";
document.getElementById("commentBodyTitle").style.fontWeight = "bold";

const initApp = async () => { //Start the app
    // get json data from db
    const contacts = await getDataFromDB();
    // render data to page
    renderContacts(contacts);
  };  

  document.addEventListener("DOMContentLoaded", initApp);

  const getDataFromDB = async () => { //fetch data from the DB
    const dataBase = await fetch(
      "https://fakerapi.it/api/v1/persons?_quantity=5"
      // Fake API
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
    const imgLink = document.createElement("a");
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
    return {article ,tipsComment, commentHead, imgLink, img, card_mb, row_g_0, col_md_4, name, displayedCommentText, cardBody, card_text, vote, heartInput, icon, upvoteNumber, commentDate};
  };
  
const createPersonCard = (elemObj, person, comment) => {
    const {article, tipsComment, commentHead, imgLink, img, card_mb, row_g_0, col_md_4, name, displayedCommentText, cardBody, card_text, vote, heartInput, icon, upvoteNumber, commentDate } = elemObj;
    
    article.className = "main"
    tipsComment.className = "row d-flex justify-content-center";
    tipsComment.setAttribute('id', 'tipsComment_');
    commentHead.className = "commentHead";
    imgLink.setAttribute('target', '_blank');
    imgLink.setAttribute('href', '#');
    // img.setAttribute('src', '');
    img.className = "img-fluid";
    img.setAttribute('alt', 'Profile Picture');
    card_mb.className = "card mb-3 displayedComment";
    row_g_0.className = "row g-0";
    col_md_4.className = "displayedCommentPic col-md-4";
    name.className = "card-title";
    displayedCommentText.className = "displayedCommentText col-md-8";
    cardBody.className = "card-body";
    card_text.className = "card-text";
    vote.className = "vote";
    heartInput.className = "heartInput";
    heartInput.setAttribute('data-id', '');
    icon.className = "far fa-heart fa-lg";
    upvoteNumber.className = "upvoteNumber_";
    commentDate.className = "commentDate";

    name.textContent = `${person.firstname} ${person.lastname}`;
    card_text.textContent = `${person.email}`;
    upvoteNumber.textContent = person.id;
    img.src = faker.random.image();

   
    article.appendChild(tipsComment);
    tipsComment.appendChild(commentHead);
    commentHead.appendChild(imgLink);
    imgLink.appendChild(img);
    commentHead.appendChild(card_mb);
    card_mb.appendChild(row_g_0);
    row_g_0.appendChild(col_md_4);
    col_md_4.appendChild(name);
    row_g_0.appendChild(displayedCommentText);
    displayedCommentText.appendChild(cardBody);
    cardBody.appendChild(card_text);
    card_mb.appendChild(vote);
    vote.appendChild(heartInput);
    heartInput.appendChild(icon);
    vote.appendChild(upvoteNumber);
    return article;
  };

//* Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
    upvote: document.querySelectorAll(".heartInput"),
    date: document.getElementsByClassName("commentDate")
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
    commentInputs.comment.value="";
}

//* Check text validation 
function enableButton() {
    let comment = commentInputs.comment.value.trim();
    if (comment.length > 5) { //If the comment length is longer than 4 characters 
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
    }
// Event listeners

//* Call function setEventListeners
setEventListeners();
