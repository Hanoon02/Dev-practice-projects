function loadHomePage(){
    const restaurantImage = document.createElement("img");
    restaurantImage.classList.add("restaurant-image");
    restaurantImage.src = "./images/pizzaMain.jpeg";
    console.log("Image Worked");
    
    return restaurantImage;
}

export default loadHomePage;