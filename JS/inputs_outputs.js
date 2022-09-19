//* Constant to get submit button, comment box and reaction button IDs
const commentInputs = {
    submit: document.getElementById("sendComment"),
    comment: document.getElementById("commentDisplayInput"),
    btnVote: Array.from(document.getElementsByClassName("heartInput")),
    voteNumber: Array.from(document.getElementsByClassName("upvoteNumber_"))
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

function sendData(data) {
    console.log('Sending data');

    const XHR = new XMLHttpRequest();

    const urlEncodedDataPairs = [];

    // Turn the data object into an array of URL-encoded key/value pairs.
    for (const [name, value] of Object.entries(data)) {
        urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behavior of browser form submissions.
    const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // Define what happens on successful data submission
    XHR.addEventListener('load', (event) => {
        alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', (event) => {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', 'https://example.com/cors.php');

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send(urlEncodedData);
}

btn.addEventListener('click', () => {
    sendData({ test: 'ok' });
})

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
function increaseVote() {
    let valorLikes = 0;
    valorLikes++;
    commentInputs.voteNumber.innerHTML = valorLikes;
}

// Event listeners
//* Event listener for 
function setEventListeners() {
    commentInputs.submit.addEventListener("click", commentSubmit);//Fires the function commentSubmit on click
    commentInputs.comment.addEventListener("keyup", enableButton);//Fires the event enableButton when the key is relesed
    // for (let i = 0; i < commentInputs.btnVote.length; i++) {
    //     commentInputs.btnVote[i].addEventListener("click", function () { increaseVote(this, true) });
    // }
    // commentInputs.btnVote.forEach.addEventListener("click", function () { increaseVote })
}

// Event listeners

//* Call function setEventListeners
setEventListeners();

