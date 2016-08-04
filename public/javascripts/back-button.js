
// Back Button
var back_button = document.getElementById('back-button-nav');

function goBack() {
    window.history.back();
}

back_button.addEventListener("click", goBack);
