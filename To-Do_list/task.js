document.addEventListener("DOMContentLoaded", function () {
    const submit = document.querySelector("#submit");
    const newTask = document.querySelector("#task");
    const taskList = document.querySelector("#tasks");

    // button by default
    submit.disabled = true;

    // Listens for input
    newTask.addEventListener("input", function () {
        submit.disabled = !newTask.value.trim();
    });

    //  form submission
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // page reload

        // Find the task the user just submitted
        const taskText = newTask.value.trim();
        if (!taskText) return false;

        // Create item 
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // new element
        taskList.appendChild(listItem);

        
        newTask.value = "";
        submit.disabled = true;
        newTask.focus(); 

        return false;
    });
});


