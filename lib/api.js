const BASE_URL = "http://localhost:5000";

export async function getTasks() {
  const res = await fetch(`${BASE_URL}/get_tasks`);
  return res.json();
}

export async function addTask(taskName) {
  const res = await fetch(`${BASE_URL}/add_task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task_name: taskName }),
  });
  return res.json();
}

export async function updateTask(id, status, task_name) {
  const res = await fetch(`http://localhost:5000/update_task/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status, task_name }),
  });
  return await res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${BASE_URL}/delete_task/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
