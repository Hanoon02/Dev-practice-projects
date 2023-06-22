function createItem(food, description){
    const item = document.createElement('div');
    item.setAttribute('id', 'item');
    const foodName = document.createElement('h3');
    foodName.textContent = food;
    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    item.appendChild(foodName);
    item.appendChild(foodDescription);
    return item;
}

function createMenu(){
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.appendChild(createItem('Pizza - $10.99', 'A delicious pizza'));
    menu.appendChild(createItem('Pasta - $5.99', 'A delicious pasta'));
    menu.appendChild(createItem('Salad - $8.99', 'A delicious salad'));
    return menu;
}

export default createMenu;