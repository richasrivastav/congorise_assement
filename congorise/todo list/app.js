const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!taskInput.value) return;
  const task = {
    id: Date.now(),
    text: taskInput.value
  };
  taskList.innerHTML += `<li id="${task.id}">${task.text}<button>Delete</button></li>`;
  taskInput.value = '';
  saveTasks();
});

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const id = li.id;
    taskList.removeChild(li);
    saveTasks();
  }
});

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(Array.from(taskList.children).map(li => {
    const id = li.id;
    const text = li.firstChild.nodeValue;
    return { id, text };
  })));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (!tasks) return;
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.id = task.id;
    li.textContent = task.text;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    li.appendChild(button);
    taskList.appendChild(li);
  });
}

loadTasks();