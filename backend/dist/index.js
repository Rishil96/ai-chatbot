import app from './app.js';
import connectToDatabase from './db/connection.js';
const PORT = process.env.PORT || 5000;
// Connection and listener that starts and listens to the requests incoming our express application
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server is listening on port 5000"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map