const cardContainer = document.querySelector(".card-container");
const successContainer = document.querySelector(".success-container");


const successButton = document.getElementById("success-button");
const dismissButton = document.getElementById("dismiss-button");

const dummyEmail = document.getElementById("dummy-email");

const errorWord = document.getElementById("error");

const checkEmail = document.getElementById("check");
function validateEmail(email) {
    return String(email).toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
successButton.addEventListener("click", () => {
    let email = checkEmail.value;
    // console.log(email);
    if (validateEmail(email)) {
        checkEmail.classList.toggle("failed-input");
        cardContainer.classList.toggle("validate");
        successContainer.classList.toggle("validate");
        dummyEmail.innerHTML = email;
        errorWord.innerHTML = "";
    } else {
        checkEmail.classList.toggle("failed-input");
        errorWord.classList.add("failed");
        errorWord.innerHTML = "Valid Email Required";
    }
})
dismissButton.addEventListener("click", () => {
    cardContainer.classList.toggle("validate");
    successContainer.classList.toggle("validate");
})


