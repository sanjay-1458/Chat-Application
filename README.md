# Overview
It is a simple chat application using react and socket.io, with feature like login, signup, theme, profile picture, active users and number of users.
Used Zustand to manage multiple state variables, tracking active sessions and online users (dynamically updated via Socket.io). Implemented JWT-based authentication with tokens that expire in 7 days.
You can send text as well as pictures in message, it was implemented using socke and cloudinary (which  is an API-first, cloud-based solution that automates processes related to managing images and videos for the web).

![image](https://github.com/user-attachments/assets/0310a134-9dcc-42a6-bd00-2d76f5f9beca)

# Envirinment Variables
```
PORT=5001
JWT_SECRET=your_secret_key
MONGODB_URI=123
CLOUDINARY_CLOUD_NAME=123
CLOUDINARY_API_KEY=123
CLOUDINARY_API_SECRET=123
NODE_ENV=development
```

# Steps to Run
The backend run on 5001 port and frontend on 5173 port, frst check if any other process is using the port.
Check for process in a given port
```
netstat -ano | findstr :PORT_NUMBER
```
Find the PID and kill it. A PID (Process Identifier) is a unique numerical identifier assigned by the operating system to every active process.
```
taskkill /PID {your_PID} /F

```

Clone the repo
```
git clone https://github.com/sanjay-1458/Chat-Application
```
Go inside the repo
```
cd Chat-Application
```
You will find folder for frontend and backend
```
frontend
backend
```
For each folder run the command in two terminals one for frontend and other for backend. You can change the scripts from ``package.json``
```
npm run dev
```
# Deployed Link on render.com
https://chat-application-sr6e.onrender.com/
