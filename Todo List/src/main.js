const addBtn = document.getElementById('add-task');
const main = document.getElementById('tasks');
const clear = document.getElementById('clear');
const allTasks = document.getElementById('all-tasks');
const form = document.getElementById('form');

var taskList = [];
var taskCount = 0;

clear.addEventListener('click', ()=>{
    taskList = [];
    taskCount = 0;
    allTasks.innerHTML = '';
})
function addTask(){
    const tempDiv = document.createElement('div');

    const newInput = document.createElement('input');
    newInput.classList.add('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Enter task');

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn');
    newBtn.classList.add('btn-success');
    newBtn.textContent = 'Add';
    
    tempDiv.appendChild(newInput);
    tempDiv.appendChild(newBtn);
    form.appendChild(tempDiv); 
    
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    newBtn.addEventListener('click', ()=>{
        allTasks.appendChild(newItem);
        newItem.textContent = newInput.value;
        taskList.push(newItem.textContent);
        tempDiv.innerHTML='';
    })
}

addBtn.addEventListener('click', ()=>{
    taskCount++;
    addTask();})
