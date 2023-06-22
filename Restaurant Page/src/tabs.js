function generateButtons(){
    const buttonList = [];
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'homeButton');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menuButton');
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    contactButton.setAttribute('id', 'contactButton');
    contactButton.textContent = 'Contact';
    buttonList[0] = homeButton;
    buttonList[1] = menuButton;
    buttonList[2] = contactButton;
    return buttonList;
}

export default generateButtons;