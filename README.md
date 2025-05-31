# 📝 Task Manager App (Frontend)

A simple full-stack Task Manager built using:

- ⚙️ **Backend**: Flask + PostgreSQL (Hosted on Render)
- 🌐 **Frontend**: Next.js (Hosted on Vercel)

---

## 🔴 Live Demo

- 🔗 **Frontend**: [task-manager-frontend.vercel.app](https://task-manager-frontend-git-main-nasrul-hasans-projects.vercel.app/)
- 🔗 **Backend API**: [task-manager-backend.onrender.com](https://task-manager-backend-p159.onrender.com)

---

## ✨ Features

- ➕ Add new tasks with task name
- 📋 View list of all tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- ⚠️ Form validation (no empty task name)
- 🌐 Hosted on Vercel & Render
- 📱 Responsive, clean UI

---

## 📁 Project Structure

### Backend (Flask)
Located in: [`task-manager-backend`](https://github.com/Nasrul-hasan/task-manager-backend)

Endpoints:

- `POST /add_task`
- `GET /get_tasks`
- `PUT /update_task/<id>`
- `DELETE /delete_task/<id>`

### Frontend (Next.js)
Located in: [`task-manager-frontend`](https://github.com/Nasrul-hasan/task-manager-frontend)

- Built with React (Next.js App Router)
- Uses `fetch` to interact with backend API
- Organized in pages and `lib/api.js` for API communication

---

## 🧪 How to Run Locally

### Prerequisites:

- Node.js (v16+)
- npm or yarn

### Steps:

```bash
# 1. Clone the repo
git clone https://github.com/Nasrul-hasan/task-manager-frontend.git
cd task-manager-frontend

# 2. Install dependencies
npm install

# 3. Create a .env.local file (optional)
# Example:
# NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

# 4. Run the app
npm run dev
