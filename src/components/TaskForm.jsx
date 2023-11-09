import { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

// Recibe la función createTask como prop
// Esta función se ejecuta en el componente App
function TaskForm() {
  // El estado title guarda el valor del input
  // El estado se actualiza cada vez que el usuario escribe en el input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    // Evita que el formulario se envíe
    e.preventDefault();
    // Crea un objeto con los datos del formulario
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  // El componente TaskForm muestra un formulario
  return (
    // Cuando el usuario envía el formulario se ejecuta la función handleSubmit
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Ingresar tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 "
          autoFocus
        />
        <textarea
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 "
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
