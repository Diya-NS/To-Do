const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark task complete
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent marking complete
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
