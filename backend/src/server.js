const express = require("express");
const app = express();
const { ServerConfig } = require("./config");
const cors = require("cors");
const mongoose = require("mongoose");
const apirouter = require("./routes");
const connectDB = require("./config/database");

connectDB();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", apirouter);

const PORT = ServerConfig.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
