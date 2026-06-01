// Drops the projects collection and inserts a few starter entries so the site
// has something to show. Run with: npm run seed

const mongoose = require("mongoose");
require("dotenv").config();
const Project = require("./models/Project");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";

const seedProjects = [
  {
    title: "Law Update Docs Add-on",
    description:
      "Google Docs add-on that scrapes recent law changes and inserts them into the document for users.",
    tech: ["Google Apps Script", "JavaScript", "Web scraping"],
    link: "",
  },
  {
    title: "GPT-2 Quote Generator",
    description:
      "Flask web app that generates short inspirational quotes from a theme using GPT-2.",
    tech: ["Python", "Flask", "Transformers"],
    link: "",
  },
  {
    title: "This Portfolio",
    description: "Personal portfolio site built on the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "",
  },
];

async function run() {
  await mongoose.connect(MONGO_URI);
  await Project.deleteMany({});
  await Project.insertMany(seedProjects);
  console.log(`Seeded ${seedProjects.length} projects.`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
