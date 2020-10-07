import * as express from "express";

const PORT = process.env["PORT"] || 8000;

let app = express();
app.use("/", express.static("./Mixery/"));
app.use("/", express.static("./html/"));
app.listen(PORT, () => {
    console.log("[express] Server started. Listening on port " + PORT);
});

process.on("uncaughtException", (err) => {
    console.error("[main] Uncaught exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("[main] Uncaught rejection:", reason, promise);
});