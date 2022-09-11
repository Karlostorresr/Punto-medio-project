const button = document.querySelector('.heartInput');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);