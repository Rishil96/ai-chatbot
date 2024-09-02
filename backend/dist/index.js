import express from 'express';
const app = express();
// Add middleware to use json in our express application
app.use(express.json());
// Basic GET Route
app.get("/", (req, res, next) => {
    return res.send("Welcome to initial phase of ChatBot Application powered by GeminiAI");
});
// Greet POST Route
app.post("/greet", (req, res, next) => {
    return res.json({ "message": `Hey ${req.body.name}! How you doing?` });
});
// Dynamic Routing
app.post("/user/:id", (req, res, next) => {
    return res.json({ "message": `User ${req.params.id}. How may I help you?` });
});
app.listen(5000, () => console.log("Server is listening on port 5000"));
//# sourceMappingURL=index.js.map