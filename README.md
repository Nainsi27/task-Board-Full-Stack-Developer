# 📝 Task Board – Full Stack Developer Assignment

A simple full-stack Task Board application built using:

- ⚡ Next.js (App Router)
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🗄 MySQL
- 🛠 Prisma ORM
- 🚀 Express.js (Backend)
- 🔐 JWT Authentication

---

## 📌 Features

### 🔐 Authentication
- User Signup
- User Login
- Secure password hashing (bcrypt)
- JWT-based authentication
- Single Role: User

### 📋 Task Management
- Create Task (Title + Status)
- View All Tasks (Only logged-in user tasks)
- Update Task Status (Todo / In Progress / Done)
- No delete, no priority, no filters (as required)

### 💻 UI
- Single dashboard page after login
- Simple task list
- Status update dropdown
- Loading & empty states
- Responsive layout using Tailwind

---

## 🗂 Project Structure
task-board-app/
│
├── backend/
│ ├── prisma/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middleware/
│ │ ├── prisma.ts
│ │ └── index.ts
│ └── package.json
│
├── frontend/
│ ├── app/
│ │ ├── login/
│ │ ├── signup/
│ │ └── dashboard/
│ └── package.json
│
└── README.md
# ⚙️ Backend Setup
## 1️⃣ Go to backend folder
cd backend
## 2️⃣ Install dependencies
npm install
## 3️⃣ Setup environment variables
Create `.env` file inside backend:
DATABASE_URL="mysql://root:yourpassword@localhost:3306/taskboard"
JWT_SECRET=""
PORT=5000
# 4️⃣ Run Prisma Migration
npx prisma migrate dev --name init
## 5️⃣ Start Backend Server
npm run start
Backend runs on:http://localhost:5000

---
# ⚙️ Frontend Setup
## 1️⃣ Go to frontend folder
cd frontend
## 2️⃣ Install dependencies
npm install
## 3️⃣ Start Frontend
npm run dev
Frontend runs on:
http://localhost:3000
---
# 🔑 API Endpoints
## Authentication
### Signup
POST /api/auth/signup
### Login
POST /api/auth/login
---
## Tasks (Protected Routes)
### Create Task
POST /api/tasks
### Get All Tasks
GET /api/tasks
### Update Task Status
PUT /api/tasks/:id
Authorization Header Required:
Authorization: Bearer <JWT_TOKEN>

---

# 🗄 Database Schema
## User
- id
- name
- email (unique)
- password
- createdAt
## Task
- id
- title
- status
- userId (Foreign Key)
- createdAt
Relationship:
User (1) → (Many) Tasks

---

# 🚀 Tech Decisions

- Prisma for clean ORM & schema management
- JWT for stateless authentication
- Tailwind for simple responsive UI
- Express for minimal backend API
- Next.js App Router for modern frontend structure

---

# 📷 Screenshots

(Add screenshots here if required)

---

# 👩‍💻 Author

Nainsi Pandey  
Full Stack Developer Task

---
# ✅ Status
✔ Backend Complete  
✔ Frontend Complete  
✔ Authentication Working  
✔ Task Management Working  
✔ Database Integrated  

---
# 🎯 Future Improvements
- Add Logout
- Use ENUM for task status
- Add route protection on frontend
- Deploy to Render (Backend) + Vercel (Frontend)
