var likes = 0;
var likesElement = document.querySelector("#vary");
var basisElement = document.querySelector("#basis");


function likecounter(){
    if(likes==0){
        basisElement.innerText = "like";
    }
    else{basisElement.innerText = "likes"}
    likes++;
    likesElement.innerText = likes;
}