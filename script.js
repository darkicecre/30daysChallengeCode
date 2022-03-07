function openModal() {
    document.getElementById("modal_background").style.display="inline";
    document.getElementById("modal_content_id").style.display="inline";
    document.getElementById("modal_content_id").style.animationName="openContent";
    document.getElementById("modal_content_id").style.animationDuration=".5s";
}
function closeModal(){
    document.getElementById("modal_background").style.display="none";
    document.getElementById("modal_content_id").style.display="none";
}