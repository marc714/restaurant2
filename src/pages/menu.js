import menuPNG from "../assets/innoutmenu.png"

function foodMenu(){
    const main = document.querySelector("#main")
    const picture = new Image();
    //picture.src = '/src/assets/innoutmenu.png';
    picture.src = menuPNG;
    main.innerHTML = "";
    main.append(picture);
}

export { foodMenu }