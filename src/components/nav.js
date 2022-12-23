import { home } from '/src/pages/home.js'
import { foodMenu } from '/src/pages/menu.js'

function navLinks(){
    const nav = ["home", "menu"];
    nav.forEach(element => {
        const aside = document.querySelector("#aside");
        // lets create the menu buttons
        const newDiv = document.createElement("div");
        newDiv.textContent = element;
        newDiv.classList.add("nav");
        
        // lets give them event listeners
        newDiv.addEventListener('click', ()=>{
            if(element === "home"){
                console.log("home")
                home();
            } else if (element === "menu"){
                console.log("menu");
                foodMenu();
            }
        });

        // now add them to the webpage section
        aside.append(newDiv);
    });
};

export { navLinks };