const express = require("express");
const config = require("./config");

const app = express();

// Middleware
app.use(express.json());

// Start the server
app.listen(process.env.PORT, () => {
    console.log("Backend server is running");
})