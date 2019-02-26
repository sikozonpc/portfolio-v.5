
function hideWIPModal(){
    const modal = document.getElementById("wip-modal");
    modal.style.transform = "translate(100vh)";
    modal.style.opacity = 0;
}

function showWIPModal(){
    const modal = document.getElementById("wip-modal");
    modal.style.display = "block";
    modal.style.transform = "translate(0)";
    modal.style.opacity = 1;
}