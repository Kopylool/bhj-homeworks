const textInput = document.getElementById("editor");


function saveText(e) {
    localStorage.setItem("text", e.target.value);
}

function clearText(e) {
    localStorage.removeItem("text");
    textInput.value = "";
}


window.onload = () => {
    textInput.value = localStorage.getItem("text");
};

textInput.addEventListener("keyup", saveText);


