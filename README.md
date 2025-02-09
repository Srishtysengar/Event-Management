# Event Master System


Event Management Platform is a full-stack web application that allows users to create, manage, and join events in real-time. This project is built using *React.js, **Node.js, **Express.js, **MongoDB, and **Socket.IO* for real-time updates.

## 🚀 Features

- *User Authentication* (Login, Register)
- *Role-Based Access Control (RBAC)*
- *Event Creation & Management*
- *Real-Time Attendee List* (Using Socket.IO)
- *Event Registration*
- *Guest Login Option*
- *Responsive UI*

## 🛠 Tech Stack

### Frontend:
- *React.js* (with Hooks)
- *React Router*
- *CSS for Styling*

### Backend:
- *Node.js & Express.js*
- *MongoDB (with Mongoose)*
- *Socket.IO* for real-time updates
- *JWT Authentication*

## 📂 Project Structure

### Backend (/backend/src)
- config/ - Configuration files (DB, Server)
- controllers/ - Business logic (Event, User)
- models/ - Database schemas (User, Event)
- routes/ - API routes
- server.js - Entry point

### Frontend (/frontend/src)
- components/ - Reusable UI components
- pages/ - Login, Register, Home, Event Pages
- App.js - Main application file
- index.js - Entry point

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/event-management-platform.git
cd event-management-platform

# Navigate to the project directory
cd event-management-platform

# Install dependencies for backend
cd backend
npm install

# Start the backend server
npm start
# (Backend will run on http://localhost:4001)

# Open a new terminal and navigate to the frontend
cd ../frontend
npm install

# Start the frontend server
npm start
# (Frontend will run on http://localhost:3000)