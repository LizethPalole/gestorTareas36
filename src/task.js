//Lista de tareas
let tasks = JSON.parse(localStorge.getItem("tasks")) || [];

//Función para llevar las tareas 
export const getTasks = () => tasks;

// Función para agregar una tarea
export const addTask = (task) =>{
     const newTask ={
        id: Date.now(),
        text: task,
        completd: false,
     };
     tasks.push(newTask);
     localStorage.setItem("tasks", JSON.stringfy(tasks));
};