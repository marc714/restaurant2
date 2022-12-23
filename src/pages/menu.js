function foodMenu(){
    const main = document.querySelector("#main")
    const picture = new Image();
    picture.src = '/src/assets/innoutmenu.png';

    main.innerHTML = "";
    main.append(picture);
}

export { foodMenu }