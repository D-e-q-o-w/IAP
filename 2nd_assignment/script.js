// Query for the submit button and input fields
const submit = document.getElementById('submit');
const taskName = document.getElementById('taskName');
const dueDate = document.getElementById('dueDate');
const priority = document.getElementById('priority');
const description = document.getElementById('description');
const assignee = document.getElementById('assignee');
const taskList = document.getElementById('taskList');

// Disable the submit button by default
submit.disabled = true;

// Function to validate inputs and enable/disable the submit button
const validateForm = () => {
    submit.disabled = !taskName.value.trim() || !dueDate.value || !priority.value;
};

// Listen for input to be typed into the input fields
taskName.addEventListener('input', validateForm);
dueDate.addEventListener('input', validateForm);
priority.addEventListener('change', validateForm);

// Listen for submission of the form
document.getElementById('taskForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default form submission

    // Create a list item for the new task
    const taskItem = document.createElement('li');
    taskItem.textContent = `Task: ${taskName.value}, Due: ${dueDate.value}, Priority: ${priority.value}, Description: ${description.value}, Assignee: ${assignee.value}`;

    // Add new element to our unordered list
    taskList.appendChild(taskItem);

    //clear input fields
    taskName.value='';
    dueDate.value='';
    priority.selectedIndex=0;
    description.value='';
    assignee.value='';
    submit.disabled=true;//disable the submit button again
    return false;//prevents the deafult submission action
});
