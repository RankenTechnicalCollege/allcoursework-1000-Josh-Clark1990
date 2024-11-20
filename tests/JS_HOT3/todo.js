"use strict"

const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

//add task
function addTask(){
  const taskText = inputTask.value;
  if (taskText !== ''){
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    inputTask.value ='';
    taskList.addEventListener('click', completeTask());

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', deleteTask());
  li.appendChild(deleteBtn);
  }
  


}
function completeTask(event){
  task.classList.toggle('completed');

}
function deleteTask(event){
  const task = event.target.parentElement;
  taskList.removeChild(task);

}



