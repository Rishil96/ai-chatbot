import express from 'express';
const app = express();
// Basic GET Route
app.get("/", (req, res, next) => {
    return res.send("Welcome to initial phase of ChatBot Application powered by GeminiAI");
});
app.listen(5000, () => console.log("Server is listening on port 5000"));
//# sourceMappingURL=index.js.map