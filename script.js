const camera = document.getElementById("camera");

camera.addEventListener("mouseover",acender);
camera.addEventListener("mouseout",apagar);

function acender(){
    camera.src = "on.png";
    document.body.style.background = "#571664ff"
}
function apagar(){
    camera.src = "off.png";
    document.body.style.background = "#222"
}