import heroPNG from "../assets/hero.png";

function home(){
    const main = document.querySelector("#main");
    const picture = new Image();
    // picture.src = '/src/assets/hero.png'
    picture.src = heroPNG;
    main.innerHTML = "";
    main.append(picture);
}

export { home }