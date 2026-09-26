const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({ message: "DevBank Backend API running" }));
app.get("/api/status", (req, res) => res.json({ application: "DevBank", service: "Backend API", status: "Healthy" }));
app.get("/api/accounts", (req, res) => res.json([
  { id: 1001, accountType: "Savings", balance: 25000, status: "Active" },
  { id: 1002, accountType: "Current", balance: 50000, status: "Active" }
]));

app.listen(PORT, "0.0.0.0", () => console.log(`Backend running on port ${PORT}`));