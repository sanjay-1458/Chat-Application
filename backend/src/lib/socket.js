import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // Adjust as per your front-end URL
  },
});

const userSocketMap = {}; // {userId: socketId}

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// When a user connects
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;

  // If the userId exists, associate the socket with the user
  if (userId) {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} connected with socket ID: ${socket.id}`);
  } else {
    console.warn("No userId provided for socket connection");
  }

  // Emit to all connected clients with the list of online users (user IDs)
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // When a user disconnects
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);

    // If userId exists, remove from userSocketMap
    if (userId) {
      delete userSocketMap[userId];
      console.log(`User ${userId} disconnected`);
    }

    // Emit the updated list of online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
