const camera = document.getElementById("camera");

camera.addEventListener("mouseover",acender);
camera.addEventListener("mouseout",apagar);

function acender(){
    camera.src = "flah.png";
    document.body.style.background = "#fcfcfcff"
}
function apagar(){
    camera.src = "download.png";
    document.body.style.background = "#222"
}