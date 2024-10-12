function goHome() {
    window.location.href = "./home.html";
}

function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("flex");
}