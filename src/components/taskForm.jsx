import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";
function TaskForm({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto mb-5">
      <form className="bg-slate-800 p-10" onSubmit={handleSubmit}>
        <h1 className="text-2xl fonr-bold text-white mb-3">Crea tu tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      ></input>
      <textarea className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 rounded-sm text-white hover:bg-indigo-400">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
