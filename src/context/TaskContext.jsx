import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  //Ingresar una nueva tarea al arreglo de tareas
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  }

  // Eliminar una tarea del arreglo de tareas
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
