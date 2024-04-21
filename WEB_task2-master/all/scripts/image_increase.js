window.onload = function(){
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++){
        images[i].onmouseover = function(){
            this.style.zoom = "1.05";
        }
        images[i].onmouseout = function(){
            this.style.zoom = "1";
        }
    }
};