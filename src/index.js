import './styles/style.css'
import { home } from './pages/home.js'
import { navLinks } from './components/nav.js';

const homePage = function(){
    navLinks();
    home();    
}();


import Logo from './assets/InNOut.png'
const header = document.querySelector("#header");
const headerLogo = new Image(100);
// headerLogo.src = '/src/assets/InNOut.png';  // this doesn't work on Github pages. Must use 'import' and when you do, VS code automatically pulls the images into the 'dist' folder after you npm run build.
headerLogo.src = Logo;
header.append(headerLogo);