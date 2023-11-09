import React from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  // Mostrar las tareas en el componente TaskList
  return (
    <main className="bg-zinc-900">
      <div className="container mx-auto p-10">
      
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
