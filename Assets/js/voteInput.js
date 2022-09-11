const button = document.querySelector('.heartInput');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);

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

function voteEventListener() {
    for (let i = 0; i < commentInputs.upvote.length; i++) {
        commentInputs.upvote[i].addEventListener("click", function () { increaseVote(this, true) });
    }
}

voteEventListener();