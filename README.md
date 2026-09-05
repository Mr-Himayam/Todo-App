# Todo-App
Full-stack Todo app demonstrating JSON-based frontend-backend communication and CRUD operations using Next.js, React, Tailwind CSS, and Mongoose.

# Todo App

A full-stack Todo application built to understand **frontend-backend communication using JSON** and REST APIs.

Unlike my previous projects, this application has the **frontend and backend developed separately**. The frontend communicates with the backend through API requests, sending and receiving data in JSON format.

## 🚀 Features

* Create new todos
* View all todos
* Update existing todos
* Delete todos
* Separate frontend and backend
* JSON-based communication
* REST API implementation
* MongoDB database integration using Mongoose
* Responsive UI using Tailwind CSS

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Mongoose
* MongoDB

### Communication

* REST APIs
* JSON

## 🔄 API Operations

The application demonstrates the four basic CRUD operations:

| Method   | Operation | Description                  |
| -------- | --------- | ---------------------------- |
| `GET`    | Read      | Fetch todos from the backend |
| `POST`   | Create    | Add a new todo               |
| `PUT`    | Update    | Update an existing todo      |
| `DELETE` | Delete    | Remove a todo                |

## 🏗️ Project Architecture

The project is divided into two separate parts:

```text
Todo App
│
├── Frontend
│   └── Next.js + React + Tailwind CSS
│
└── Backend
    └── Node.js + Express + Mongoose
```

The frontend sends HTTP requests to the backend API. The backend processes the request, communicates with MongoDB, and returns the response in **JSON format**.

```text
Frontend
   │
   │ HTTP Request
   │ GET / POST / PUT / DELETE
   ▼
Backend API
   │
   │ Mongoose
   ▼
MongoDB
   │
   │ JSON Response
   ▼
Frontend
```

## 📚 What I Learned

Through this project, I learned and practiced:

* How separate frontend and backend applications communicate
* How REST APIs work
* How to send requests from the frontend to the backend
* How JSON is used to transfer data
* How to handle GET, POST, PUT, and DELETE requests
* How to connect a backend application with MongoDB using Mongoose
* How CRUD operations work in a real application
* How to structure a project with separate frontend and backend

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Setup Backend

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal to access the application.

## 📌 Project Purpose

This project was created primarily as a **learning project** to understand how modern frontend applications communicate with independently developed backend APIs.

The main focus is on understanding **JSON data exchange, REST APIs, HTTP methods, and CRUD operations** rather than just building a Todo application.

## 🔮 Future Improvements

* User authentication and authorization
* Todo categories and priorities
* Due dates and reminders
* Search and filtering
* Better error handling
* Form validation
* Deployment of frontend and backend

## 👨‍💻 Author

**Himanshu Singh**

This project is part of my journey of learning **full-stack web development**.
