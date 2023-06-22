import loadHomePage from "./homePage";
import createMenu from "./menu";
import generateButtons from "./tabs";
function initializeHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h2");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Tony's Pizzareia";

    header.appendChild(restaurantName);
    return header;
}

function initializeBody(){
    const main = document.createElement("main");
    main.classList.add("main");

    const allTabs = generateButtons();

    const tabs = document.createElement("div");
    tabs.classList.add("tabs");

    for(let i = 0; i < allTabs.length; i++){
        main.appendChild(allTabs[i]);
    }
    main.appendChild(tabs);
    allTabs[0].addEventListener("click", ()=>{
        tabs.textContent = "";
        tabs.appendChild(loadHomePage())
    });
    allTabs[1].addEventListener("click", ()=>{
        tabs.textContent = "";
        tabs.appendChild(createMenu())
    });
    return main;
}

function initialize(){
    const content = document.getElementById("content");
    content.appendChild(initializeHeader());
    content.appendChild(initializeBody());
}

export default initialize;