const menuIcon = document.querySelector("#bar");



const toggleMenu = (e) => {
    const resMenu = document.querySelector("#resMenu");
    resMenu.style.left = "0"
    resMenu.style.transition = "500ms"
    resMenu.style.opacity = "1"
    
}

//remove sidebar

const removeMenu = () => {
    const resMenu = document.querySelector("#resMenu");
    resMenu.style.left = "-448px"
    resMenu.style.transition = "500ms"
    resMenu.style.opacity = "0"
}