"use client";

import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../lib/api";
import { FaCheckCircle, FaRegCircle, FaEdit, FaTrash } from "react-icons/fa";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
  const data = await getTasks();

  // Sort: uncompleted (false) first, completed (true) later
  const sortedData = data.sort((a, b) => a.status - b.status);

  setTasks(sortedData);
}

  async function handleAddTask() {
    // check validation
    
   // if (!taskName.trim()) return;
  if (!taskName.trim()) {
    setError("Task name cannot be empty.");
    return;
  }
  setError("");
    if (editId !== null) {
      await updateTask(editId, false, taskName);
      setEditId(null);
    } else {
      await addTask(taskName);
    }
    setTaskName("");
    loadTasks();
  }

  async function toggleStatus(task) {
    await updateTask(task.id, !task.status, task.task_name);
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  function handleEdit(task) {
    setTaskName(task.task_name);
    setEditId(task.id);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.status;
    if (filter === "incomplete") return !task.status;
    return true;
  });

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        📝 Task Manager
      </h1>
      <div className="flex mb-6 gap-2">
        <input
          className="border p-2 flex-1 rounded"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add new task"
        />
        
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddTask}
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>
    {error && (
  <p className="text-red-500 mb-2">{error}</p>
)}
      <div className="mb-4">
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div
              className="flex items-center gap-3 cursor-pointer flex-1"
              onClick={() => toggleStatus(task)}
            >
              {task.status ? (
                <FaCheckCircle className="text-green-600" />
              ) : (
                <FaRegCircle className="text-gray-400" />
              )}
              <span
                className={`text-lg ${task.status ? "line-through text-gray-400" : ""}`}
              >
                {task.task_name}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-yellow-400 px-3 py-1 rounded text-white"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 px-3 py-1 rounded text-white"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

