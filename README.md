
# 🚀 Chat Application

It is a simple chat application using React and Socket.io, featuring:

- 🔑 **Login & Signup**
- 🎨 **Dark/Light Theme**
- 🖼 **Profile Picture Upload**
- 🟢 **Active Users & Online Status**
- 💬 **Real-time Messaging (Text & Images)**

Used Zustand to manage multiple state variables, tracking active sessions and online users (dynamically updated via Socket.io). Implemented JWT-based authentication with tokens that expire in **7 days**. Images are uploaded via **Cloudinary**.

---

## 🖼 Preview
<img src="https://github.com/user-attachments/assets/0310a134-9dcc-42a6-bd00-2d76f5f9beca" width="500" alt="Chat App Preview">

---

## 🔧 Environment Variables
Set up the following environment variables in a `.env` file:

```ini
PORT=5001
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

---

## 🛠 Steps to Run
The backend runs on **port 5001** and the frontend on **port 5173**. First, ensure no other process is using the port.

### 🔍 Check for a process running on a given port:
```sh
netstat -ano | findstr :PORT_NUMBER
```

### ❌ Kill the process using its PID:
```sh
taskkill /PID {your_PID} /F
```

### 🏗 Clone the Repository
```sh
git clone https://github.com/sanjay-1458/Chat-Application
```

### 📂 Navigate to the Project Folder
```sh
cd Chat-Application
```

You will find two folders:
```
frontend/
backend/
```

For each folder, run the following command in separate terminals (one for frontend, one for backend):
```sh
npm run dev
```

---

## 🌐 Deployed Link (Render.com)
🔗 **Live Demo:** [Chat Application](https://chat-application-sr6e.onrender.com/) 🚀

