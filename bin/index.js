"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = process.env["PORT"] || 8000;
let app = express();
app.use("/", express.static("./Mixery/"));
app.use("/", express.static("./html/"));
app.listen(PORT, () => {
    console.log("[express] Server started. Listening on port " + PORT);
});
