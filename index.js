const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const {db} = require("./dbconn");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
const port = process.env.PORT || 3000;

const projectRouter = require("./routes/projectRoutes");

app.use("/project", projectRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
