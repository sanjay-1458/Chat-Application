import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [];


for (let i = 1; i <= 5; i++) {
  seedUsers.push({
    email: `user${i}@example.com`,
    fullName: `User${i}`,
    password: "123456",
    profilePic: `https://randomuser.me/api/portraits/women/${i}.jpg`,
  });
}

for (let i = 6; i <= 10; i++) {
  seedUsers.push({
    email: `user${i}@example.com`,
    fullName: `User${i}`,
    password: "123456",
    profilePic: `https://randomuser.me/api/portraits/men/${i-5}.jpg`, 
  });
}

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
