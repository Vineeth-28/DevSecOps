const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "portfolio-app",
  });
});

// API route
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Vineet",
    role: "Software Engineer",
    skills: ["JavaScript", "Docker", "AWS", "DevSecOps", "CI/CD"],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
