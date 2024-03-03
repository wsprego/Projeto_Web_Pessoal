function slider (anything){
    document.querySelector ('.one') .src = anything;
};

let menu = document.querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navbar.classList.toggle ('open');

    //função que ao clicar em uma foto do menu 'main1...3' abra a foto que seja equivalente a mesma 
}
