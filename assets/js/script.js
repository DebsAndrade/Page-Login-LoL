const checkInputText = () => {
    const inputDOM = document.querySelectorAll(".input-text");
    const valueFromInputs = Array.from(inputDOM).map((input) => input.value);
    const notFilled = valueFromInputs.filter((value) => value.trim() == '');

    const redButton = document.querySelector(".red-button");
    if(notFilled.length === 0){
        redButton.removeAttribute("disabled");
    } else {
        redButton.setAttribute("disabled", true);
    }
}

document.querySelector("#usename").addEventListener("blur", checkInputText);
document.querySelector("#password").addEventListener("blur", checkInputText);

//document.querySelectorAll(".input-text").forEach((element) => element.addEventListener("blur", checkInputText));