function openCV() {
    document.getElementById('cvPopup').style.display = 'block';
}

function closeCV() {
    document.getElementById('cvPopup').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('cvPopup');
    if (event.target === cvPopup) {
        closeCV();
    }
};