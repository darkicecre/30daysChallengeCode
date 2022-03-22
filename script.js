window.onload=function(){
    
    document.getElementById("search_button_id").addEventListener("click",function(){
        document.getElementById("search_box_id").classList.toggle("showOn");
        document.getElementById("search_input_id").focus();
    })
}