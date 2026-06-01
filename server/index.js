// Express + MongoDB backend for my portfolio site.
// Serves the list of projects that the React frontend fetches and displays.

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Project = require("./models/Project");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";
const PORT = process.env.PORT || 5000;

// GET all projects, newest first
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Could not load projects" });
  }
});

// POST a new project (used it to add projects without touching the DB by hand)
app.post("/api/projects", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: "Invalid project data" });
  }
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
