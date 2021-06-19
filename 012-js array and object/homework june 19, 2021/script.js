let tasks = ['eat', 'sleep', 'code'];

const displayTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i + 1}: ${tasks[i]}`);
  }
};

const addTask = (task) => {
  tasks.push(task);
};

const deleteTask = () => {
  console.log(`You removed ${tasks.pop()}`);
  displayTasks(tasks);
};
