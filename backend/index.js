const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 5000;

//middleware to send req
app.use(express.json());
//available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
//express hello world for checking
// app.get("/", (req, res) => res.send("Hello World!")),
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
