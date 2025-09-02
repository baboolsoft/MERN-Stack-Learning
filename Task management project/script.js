//Task Manager JavaScript (script.js)


let tasks = [];
let currentFilter = 'all';

let taskInput, categoryInput, tasksList, categoryFilter;
let totalCount, completedCount, remainingCount;


document.addEventListener('DOMContentLoaded', function() {
    
    taskInput = document.getElementById('taskInput');
    categoryInput = document.getElementById('categoryInput');
    tasksList = document.getElementById('tasksList');
    categoryFilter = document.getElementById('categoryFilter');
    totalCount = document.getElementById('totalCount');
    completedCount = document.getElementById('completedCount');
    remainingCount = document.getElementById('remainingCount');
    
    
    document.getElementById('addTaskBtn').addEventListener('click', addTask);
    categoryFilter.addEventListener('change', filterTasks);
    taskInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());
    categoryInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());
    
    
    renderTasks();
    updateStats();
    taskInput.focus();
});


function addTask() {
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
    updateCategoryFilter();
    renderTasks();
    updateStats();
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
        updateCategoryFilter();
        renderTasks();
        updateStats();
    }
}

function updateCategoryFilter() {
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
        tasksList.innerHTML = '<div class="no-tasks">No tasks found</div>';
        return;
    }
    
    tasksList.innerHTML = filtered.map(task => `
        <div class="task-item ${task.completed ? 'task-done' : ''}">
            <div>
                <div class="task-title">${task.title}</div>
                <span class="task-category">${task.category}</span>
            </div>
            <div>
                <button class="btn-complete" onclick="toggleTask(${task.id})">
                    ${task.completed ? '✅' : '⭕'}
                </button>
                <button class="btn-delete" onclick="deleteTask(${task.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    const completed = tasks.filter(t => t.completed).length;
    totalCount.textContent = tasks.length;
    completedCount.textContent = completed;
    remainingCount.textContent = tasks.length - completed;
}