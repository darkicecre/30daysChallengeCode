// var imgSource = [
//     "Image/img1.jpeg",
//     "Image/img2.jpeg",
//     "Image/img3.jpeg",
//     "Image/img4.jpeg",
//     "Image/img5.jpeg",
//     "Image/img6.jpeg",
//     "Image/img7.jpeg",
//     "Image/img8.jpeg",
//     "Image/1.jpg",
//     "Image/2.jpg",
//     "Image/3.jpg",
//     "Image/4.jpg",
//     "Image/5.jpg",
//     "Image/6.jpg"
// ]
var imgSource=[
    "ImageFamily/1.jpg",
    "ImageFamily/2.jpg",
    "ImageFamily/3.jpg",
    "ImageFamily/4.jpg",
    "ImageFamily/5.jpg",
    "ImageFamily/6.jpg",
    "ImageFamily/7.jpg",
    "ImageFamily/8.jpg",
    "ImageFamily/9.jpg",
    "ImageFamily/10.jpg",
    "ImageFamily/11.jpg",
    "ImageFamily/12.jpg",
    "ImageFamily/13.jpg",
    "ImageFamily/14.jpg",
    "ImageFamily/15.jpg",
    "ImageFamily/16.jpg",
    "ImageFamily/19.png",
    "ImageFamily/20.png",
]
window.onload = () => {
    for (var i = 0; i < imgSource.length; i++) {
        if (i % 4 == 0) {
            var parentDiv = document.createElement("div");
            parentDiv.classList.add("flex__row");
            document.body.appendChild(parentDiv);
            var divImg1 = document.createElement("div");
            var divImg2 = document.createElement("div");
            var divImg3 = document.createElement("div");
            var divImg4 = document.createElement("div");
            divImg1.classList.add("image");
            divImg2.classList.add("image");
            divImg3.classList.add("image");
            divImg4.classList.add("image");
            parentDiv.appendChild(divImg1);
            parentDiv.appendChild(divImg2);
            parentDiv.appendChild(divImg3);
            parentDiv.appendChild(divImg4);
            divImg1.innerHTML = `<img src="` + imgSource[i] + `" alt="" onclick="showImage(` + i + `)">`
            if (i + 1 < imgSource.length) {
                divImg2.innerHTML = `<img src="` + imgSource[i + 1] + `" alt="" onclick="showImage(` + (i + 1) + `)">`
            }
            if (i + 2 < imgSource.length) {
                divImg3.innerHTML = `<img src="` + imgSource[i + 2] + `" alt="" onclick="showImage(` + (i + 2) + `)">`
            }
            if (i + 3 < imgSource.length) {
                divImg4.innerHTML = `<img src="` + imgSource[i + 3] + `" alt="" onclick="showImage(` + (i + 3) + `)">`
            }
        }
    }
    var parentDiv = document.createElement("div");
    parentDiv.classList.add("flex__row");
    var padding = document.createElement("div");
    padding.style.height = "100px";
    parentDiv.appendChild(padding);
    document.body.appendChild(parentDiv);
}
function checkArrow(index){
    if(index==0){
        document.getElementById("left_button").style.visibility="hidden";
        document.getElementById("right_button").style.visibility="visible";
    }
    else if(index==(imgSource.length-1)){
        document.getElementById("right_button").style.visibility="hidden";
        document.getElementById("left_button").style.visibility="visible";
    }
    else{
        document.getElementById("left_button").style.visibility="visible";
        document.getElementById("right_button").style.visibility="visible";
    }
}
function showImage(index) {
    indexNow=index;
    document.getElementById("carousel_background").style.visibility="visible";
    document.getElementById("imageShowId").innerHTML=`
    <img class="bigImage" src="`+imgSource[index]+`" alt="">
    `
    checkArrow(index);
}
var indexNow=0;
function showImageLeft(){
    indexNow=indexNow-1;
    checkArrow(indexNow);
    document.getElementById("imageShowId").innerHTML=`
    <img class="bigImage toLeft" src="`+imgSource[(indexNow)]+`" alt="">
    `
}
function showImageRight(){
    indexNow=indexNow+1;
    checkArrow(indexNow);
    document.getElementById("imageShowId").innerHTML=`
    <img class="bigImage toRight" src="`+imgSource[(indexNow)]+`" alt="">
    `
}
function closCarousel(){
    document.getElementById("left_button").style.visibility="hidden";
    document.getElementById("right_button").style.visibility="hidden";
    document.getElementById("carousel_background").style.visibility="hidden";

}