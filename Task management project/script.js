let tasks = [];
let currentFilter = "all";

let taskInput, categoryInput, categoryFilter,taskLists, completedTasks, remainingTasks,totalTasks;

document.addEventListener('DOMContentLoaded', function (){
taskInput = document.getElementById('taskInput');
categoryInput = document.getElementById('categoryInput');
taskLists = document.getElementById('taskLists');
categoryFilter = document.getElementById('categoryFilter');
totalTasks = document.getElementById('totalTasks');
completedTasks = document.getElementById('completedTasks');
remainingTasks = document.getElementById('remainingTasks');  
    
document.getElementById('addTaskBtn').addEventListener('click', addTask);
categoryFilter.addEventListener('change', filterTasks);
taskInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());
categoryInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());    
    
renderTasks();
updateStats();
taskInput.focus();
});

function addTask(){
    const title = taskInput.value.trim();
    const category = categoryInput.value.trim();
    
    if (!title || !category) {
        alert('Please fill in both fields');
        return;
    }
    tasks.push({
    id: Date.now(),
    title: title,
    category: category,
    completed: false
    });
    taskInput.value = '';
    categoryInput.value = '';
    taskInput.focus();
    updatecategoryFilter();
    renderTasks();
    updateStats();
}

function updatecategoryFilter() {
    const categories = [...new Set(tasks.map(t => t.category))];
    const current = categoryFilter.value;
    
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(cat => {
        categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    
    if (categories.includes(current)) categoryFilter.value = current;
}

function filterTasks() {
    currentFilter = categoryFilter.value;
    renderTasks();
}

function renderTasks() {
    const filtered = currentFilter === 'all' ? tasks : tasks.filter(t => t.category === currentFilter);
    
    if (filtered.length === 0) {
        taskLists.innerHTML = '<div class="no-tasks">No tasks found</div>';
        return;
    }
    
    taskLists.innerHTML = filtered.map(task => `
        <div ${task.completed ? 'task-done' : ''}">
            <div>
                <div> ${task.title}</div> - <span> ${task.category}</span>
            </div>
            <div>
                <button onclick="toggleTask(${task.id})">
                    ${task.completed ? '✔' : '✔'}
                </button>
                <button onclick="deleteTask(${task.id})">X</button>
            </div>
        </div>
    `).join('');
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        updateStats();
    }
}

function deleteTask(id) {
    if (confirm('Delete this task?')) {
        tasks = tasks.filter(t => t.id !== id);
        updatecategoryFilter();
        renderTasks();
        updateStats();
    }
}

function updateStats() {
    const completed = tasks.filter(t => t.completed).length;
    totalCount.textContent = tasks.length;
    completedCount.textContent = completed;
    remainingCount.textContent = tasks.length - completed;
}








