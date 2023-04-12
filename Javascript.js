const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskName = newTaskInput.value;
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(taskName);


  newTask.appendChild(taskText);
  taskList.appendChild(newTask);
  newTaskInput.value = "";

  const localStorageKey = 'Data';
  let myArray = [];
  const savedData = localStorage.getItem(localStorageKey);
  console.log(savedData, 'saveData')

    if (savedData) {
      myArray = JSON.parse(savedData);
    }
    myArray.push(taskName);

    localStorage.setItem(localStorageKey, JSON.stringify(myArray));

    var y = localStorage.getItem('Data');
    console.log(y, 'rhrhdfd');

    

  function hlo() {
    newTask.classList.toggle("done");
  }
  newTask.addEventListener("click", hlo);


  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  newTask.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    newTask.classList.add("delete")
  }
  
      
  
}





