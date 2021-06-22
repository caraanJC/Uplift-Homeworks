let tasks = ['eat', 'sleep', 'code'];

// console.log tasks one by one
const displayTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i + 1}: ${tasks[i]}`);
  }
};

// Checks the array if it's already inside the tasks array
const isDuplicate = (task) => {
  return tasks.includes(task); // returns true or false
};

// Push task to tasks
const addTask = (task) => {
  // remove other data types beside string
  if (typeof task !== 'string') {
    return 'Enter a string';
  }

  // check for duplicates
  if (isDuplicate(task)) {
    return 'Already in tasks';
  }

  tasks.push(task);
  console.log(`You added: ${task}`);
  displayTasks(tasks);
};

// removes the last task
const deleteTask = () => {
  // remove other data types beside string
  if (typeof task !== 'string') {
    return 'Enter a string';
  }
  console.log(`You removed: ${tasks.pop()}`);
  displayTasks(tasks);
};
