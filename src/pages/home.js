function home(){
    const main = document.querySelector("#main");
    const picture = new Image();
    picture.src = '/src/assets/hero.png'
    main.innerHTML = "";
    main.append(picture);
}

export { home }