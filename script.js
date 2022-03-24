var content = document.getElementById("contentId");
var input = document.getElementById("inputText");
function removeTag(event){
    console.log(content);
    content.removeChild(event.parentElement);
}
input.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
        let content = document.getElementById("contentId");
        const para = document.createElement("div");
        para.classList.add('item');
        para.innerHTML='<p>'+input.value+'</p><button class="remove-tag" onclick="removeTag(this)"><i class="fa-solid fa-xmark"></i></button>';
        content.insertBefore(para,input);
        input.value='';
    }
})
function removeAll(){
    if(content.childElementCount>1){
        content.removeChild(content.firstChild);
        removeAll();
    }
}